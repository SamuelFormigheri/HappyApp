import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';


import logo from '../../assets/icons/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';


import { Container, Content, AnimationContainer } from './styles';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: Object) :Promise<void> => {
      try
      {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
            name: Yup.string().required('Nome é Obrigatório.'),
            email: Yup.string().required('E-mail é Obrigatório.').email('E-mail Invalido.'),
            password: Yup.string().min(6, 'Senha deve ter no mínimo 6 digitos.'),
            password_confirmation: Yup.string().oneOf([Yup.ref('password')], 'As senhas não conferem')
        });

        await schema.validate(data, {
            abortEarly: false
        });

        await api.post('/users', data);

        history.push('/');
      }
      catch(err)
      {
        if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
            return;
        }
        
        //  const message = {
        //     id: "message",
        //     type: "danger",
        //     title: "Erro no cadastro",
        //     description: "Verifique os campos e tente novamente..."
        // }
      }
  },[history]);

  return (
      <Container>
          <Content>
            <AnimationContainer>
                <img src={logo} alt="GoBarber Logo"/>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome"/>
                    <Input name="email" icon={FiMail} placeholder="E-mail"/>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
                    <Input name="password_confirmation" icon={FiLock} placeholder="Confirmar Senha" type="password"/>
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <Link to="/login"><FiArrowLeft /> Voltar para o Login</Link>
            </AnimationContainer>
          </Content>
      </Container>
  );
}

export default Register;
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content:center;
    padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFFFFF;
  font-family: 'RobotoSlab-Medium';
  margin: 42px 0 18px;
`;

export const BackToLogin = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom:0;
  right: 0;
  background: #07C4C9;
  border-top-width: 1px;
  border-color: #12AFCB;
  padding: 16px 0 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`; 

export const BackToLoginText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 12px;
`; 

import { Router } from 'express';

import verifyAuthenticated from '@modules/infra/middlewares/User/verifyAuthenticated';
import ProfileController from '@modules/infra/controllers/User/Profile/ProfileController';
import { celebrate, Joi, Segments } from 'celebrate';


const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(verifyAuthenticated);

profileRouter.get('/', profileController.show);

profileRouter.put('/',celebrate({
    [Segments.BODY]:{
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        old_password: Joi.string(),
        password: Joi.string(),
        password_confirmation: Joi.string().valid(Joi.ref('password'))
    }
}),  profileController.update);



export default profileRouter;
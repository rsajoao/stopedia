import { Router } from 'express';
import LoginController from '../Controllers/Login.controller';
import validateLoginParams from '../Middlewares/LoginValidations';
// import Authorization from '../Middlewares/Authorization';

const LoginRouter = Router();

LoginRouter.post(
  '/login',
  validateLoginParams,
  (req, res, next) => new LoginController(req, res, next).login(),
);

export default LoginRouter;

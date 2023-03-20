import { Router } from 'express';
import LoginRouter from './Login.router';

const routers = Router();

routers.use(LoginRouter);

export default routers;

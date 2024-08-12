import { Router } from 'express';
import loginService from '../services/login.js';

const loginRouter = Router();

loginRouter.post('/', loginService)

export default loginRouter;
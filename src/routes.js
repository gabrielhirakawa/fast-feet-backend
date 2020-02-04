import { Router } from "express";

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/Recipient';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/health', (req, res)=> res.send('health path is ok'));

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.post('/recipient', RecipientController.store);

export default routes;

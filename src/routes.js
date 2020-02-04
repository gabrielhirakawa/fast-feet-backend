import { Router } from "express";

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/health', (req, res)=> res.send('health path is ok'));

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

export default routes;

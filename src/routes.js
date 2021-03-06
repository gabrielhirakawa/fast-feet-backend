import { Router } from "express";



import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/Recipient';
import DelivererController from "./app/controllers/DelivererController";
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/health', (req, res)=> res.send('health path is ok'));

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/users', UserController.store);

routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);

routes.get('/deliverers', DelivererController.index);
routes.post('/deliverers', DelivererController.store);
routes.put('/deliverers/:id', DelivererController.update);
routes.delete('/deliverers/:id', DelivererController.delete);



export default routes;

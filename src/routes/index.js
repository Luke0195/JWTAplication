import { Router } from 'express';
import userController from '../Controller/UserController';
const routes = new Router();

routes.get('/users', userController.index);
routes.post('/users', userController.store);


export default routes;

import { Router } from 'express';
import userController from '../Controller/UserController';
import sessionController from '../Controller/SessionController';
const routes = new Router();

// Rota de cadastro de usuário
routes.post('/users', userController.store);



// Rota de autentificação
routes.post('/sessions', sessionController.store);
export default routes;

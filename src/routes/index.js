import { Router } from 'express';
import userController from '../Controller/UserController';
import sessionController from '../Controller/SessionController';
import testController from '../Controller/TestController';
import loginRequired from '../middlewares/loginRequired';
const routes = new Router();

// Rota de cadastro de usuário
routes.post('/users', userController.store);
// Rota de autentificação
routes.post('/sessions', sessionController.store);
routes.use(loginRequired);
routes.get('/Lista', (request,response)=> response.send('ok'));

routes.get('/teste', loginRequired, testController.index);
export default routes;

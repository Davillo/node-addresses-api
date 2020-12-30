import {Router} from 'express';
import AddressController from './app/controllers/AddressController';
const routes = new Router();

routes.get('/addresses', AddressController.findByStreet);
routes.get('/addresses/:cep', AddressController.findByCep);

export default routes;

import {Router} from 'express';
import AddressController from './app/controllers/AddressController';
const routes = new Router();

routes.get('/addresses', AddressController.findByStreet);
routes.get('/addresses/:zipCode', AddressController.findByZipCode);

export default routes;

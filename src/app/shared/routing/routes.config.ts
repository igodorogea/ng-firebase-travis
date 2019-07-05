import { crudRoutes } from './routes.util';

export const appRoutes = {
  shipment: crudRoutes('/shipment'),
  order: crudRoutes('/order'),
  product: crudRoutes('/product'),
};

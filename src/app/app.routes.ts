import { shipmentRoutes } from './shipment/shipment.routes';

export const ENTRY_POINTS = {
  shipment: 'shipment',
  order: 'order',
  product: 'product',
  users: 'users'
};

export const appRoutes = {
  shipment: shipmentRoutes('/' + ENTRY_POINTS.shipment)
};

import { Routes } from '@angular/router';
import { PRODUCT_ROUTES_CONFIG } from './product/product.routes';
import { SHIPMENT_ROUTES_CONFIG } from './shipment/shipment.routing';
import { USERS_ROUTES_CONFIG } from './users/users.routing';
import { ORDER_ROUTES_CONFIG } from './order/order.routes';
import { appRoutes, ENTRY_POINTS } from './app.routes';

export const APP_ROUTES_CONFIG: Routes = [
  { path: '', redirectTo: appRoutes.shipment.LIST, pathMatch: 'full' },
  { path: ENTRY_POINTS.shipment, children: SHIPMENT_ROUTES_CONFIG },
  { path: ENTRY_POINTS.order, children: ORDER_ROUTES_CONFIG },
  { path: ENTRY_POINTS.product, children: PRODUCT_ROUTES_CONFIG },
  { path: ENTRY_POINTS.users, children: USERS_ROUTES_CONFIG },
];

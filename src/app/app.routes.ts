import { Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { SHIPMENT_ROUTES } from './shipment/shipment.routes';
import { ORDER_ROUTES } from './order/order.routes';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: appRoutesNames.SHIPMENT, pathMatch: 'full' },
  { path: appRoutesNames.SHIPMENT, children: SHIPMENT_ROUTES },
  { path: appRoutesNames.ORDER, children: ORDER_ROUTES },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), data: { collection: 'products' } },
];

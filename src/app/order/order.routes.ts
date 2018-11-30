import { Routes } from '@angular/router';
import { orderRoutesNames } from './order.routes.names';
import { OrderListComponent } from './list/order-list.component';

export const ORDER_ROUTES: Routes = [
  { path: '', redirectTo: orderRoutesNames.LIST, pathMatch: 'full' },
  { path: orderRoutesNames.LIST, component: OrderListComponent }
];

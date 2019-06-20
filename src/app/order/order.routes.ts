import { Routes } from '@angular/router';
import { CREATE, DETAIL, EDIT, LIST } from '../shared/routes.util';
import { OrdersListComponent } from './list/orders-list.component';
import { OrderCreateComponent } from './create/order-create.component';
import { OrderDetailComponent } from './detail/order-detail.component';
import { OrderEditComponent } from './edit/order-edit.component';

export const ORDER_ROUTES_CONFIG: Routes = [
  { path: LIST, component: OrdersListComponent },
  { path: `${CREATE}/:shipmentId`, component: OrderCreateComponent },
  { path: `${DETAIL}/:id`, component: OrderDetailComponent },
  { path: `${EDIT}/:id`, component: OrderEditComponent },
];

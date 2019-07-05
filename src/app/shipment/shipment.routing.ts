import { Routes } from '@angular/router';
import { CREATE, DETAIL, EDIT, LIST } from '../shared/routing/routes.util';
import { ShipmentsListComponent } from './list/shipments-list.component';
import { ShipmentCreateComponent } from './create/shipment-create.component';
import { ShipmentDetailComponent } from './detail/shipment-detail.component';
import { ShipmentEditComponent } from './edit/shipment-edit.component';

export const SHIPMENT_ROUTES_CONFIG: Routes = [
  { path: LIST, component: ShipmentsListComponent },
  { path: CREATE, component: ShipmentCreateComponent },
  { path: `${DETAIL}/:id`, component: ShipmentDetailComponent },
  { path: `${EDIT}/:id`, component: ShipmentEditComponent },
];

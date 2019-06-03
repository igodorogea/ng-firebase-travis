import { Routes } from '@angular/router';
import { shipmentRoutesNames } from './shipment.routes.names';
import { ShipmentListComponent } from './list/shipment-list.component';

export const SHIPMENT_ROUTES: Routes = [
  { path: '', redirectTo: shipmentRoutesNames.LIST, pathMatch: 'full' },
  { path: shipmentRoutesNames.LIST, component: ShipmentListComponent },
];

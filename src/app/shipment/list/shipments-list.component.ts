import { Component } from '@angular/core';
import { appRoutes } from '../../app.routes';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipments-list.component.html'
})
export class ShipmentsListComponent {
  shipments$ = this.dataSvc.getShipments();
  routes = appRoutes;

  constructor(private dataSvc: DataService) {}
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html'
})
export class ShipmentDetailComponent {
  shipment$ = this.dataSvc.getShipment(this.route.snapshot.params.id);
  orders$ = this.dataSvc.getShipmentOrders(this.route.snapshot.params.id);
  routes = appRoutes;

  constructor(private dataSvc: DataService, private router: Router, private route: ActivatedRoute) {}
}

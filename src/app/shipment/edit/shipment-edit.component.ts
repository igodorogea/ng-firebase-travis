import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { Shipment } from '../../shared/persistence/models/shipment';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-edit.component.html'
})
export class ShipmentEditComponent extends AutoUnsubscribe {
  shipment: Shipment;
  shipmentForm = this.fb.group({
    id: [''],
    description: [''],
  });
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
    this.subscriptions.push(
      this.dataSvc.getShipment(this.route.snapshot.params.id)
        .subscribe(shipment => {
          this.shipment = shipment;
          const { id, description } = shipment;
          this.shipmentForm.setValue({ id, description });
        })
    );
  }

  async update() {
    if (this.shipmentForm.valid) {
      await this.dataSvc.saveShipment(this.shipmentForm.value);
      await this.router.navigate([this.routes.shipment.LIST]);
    }
  }
}

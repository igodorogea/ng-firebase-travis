import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shipment } from '../../shared/models/shipment';
import { FormBuilder, Validators } from '@angular/forms';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-edit.component.html'
})
export class ShipmentEditComponent {
  shipment = this.afs.collection('shipments').doc<Shipment>(this.route.snapshot.params.id);
  shipmentForm = this.fb.group({
    id: [''],
    date: ['', [Validators.required]],
    description: [''],
  });
  routes = appRoutes;

  constructor(
    private readonly afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.shipment.valueChanges().subscribe(shipment => this.shipmentForm.setValue({ ...shipment, date: shipment.date.toDate() }));
  }

  async update() {
    if (this.shipmentForm.valid) {
      const shipment = this.shipmentForm.value;
      await this.shipment.update(shipment);
      await this.router.navigate([this.routes.shipment.LIST]);
    }
  }
}

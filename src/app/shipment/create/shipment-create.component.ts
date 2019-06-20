import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Shipment } from '../../shared/models/shipment';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-create.component.html'
})
export class ShipmentCreateComponent {
  shipmentCol: AngularFirestoreCollection<Shipment> = this.afs.collection('shipments');
  shipmentForm = this.fb.group({
    id: [''],
    date: ['', [Validators.required]],
    description: [''],
  });
  startDate = new Date();

  constructor(
    private readonly afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async create() {
    if (this.shipmentForm.valid) {
      const shipment = this.shipmentForm.value;
      shipment.id = this.afs.createId();
      await this.shipmentCol.doc(shipment.id).set(shipment);
      await this.router.navigate(['..'], { relativeTo: this.route });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-create.component.html'
})
export class ShipmentCreateComponent {
  shipmentForm = this.fb.group({
    id: [''],
    description: [''],
  });

  constructor(public location: Location, private dataSvc: DataService, private fb: FormBuilder) {}

  async create() {
    if (this.shipmentForm.valid) {
      await this.dataSvc.saveShipment(this.shipmentForm.value);
      this.location.back();
    }
  }
}

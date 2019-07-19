import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../../shared/persistence/data.service';
import { Shipment } from '../../shared/persistence/models/shipment';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-create.component.html'
})
export class ShipmentCreateComponent {
  constructor(
    public location: Location,
    private dataSvc: DataService
  ) {}

  async create(shipment: Shipment) {
    await this.dataSvc.saveShipment(shipment);
    this.location.back();
  }
}

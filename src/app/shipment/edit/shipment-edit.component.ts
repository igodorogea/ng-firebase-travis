import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../shared/persistence/data.service';
import { Shipment } from '../../shared/persistence/models/shipment';

@Component({
  selector: 'app-shipment-create',
  templateUrl: './shipment-edit.component.html'
})
export class ShipmentEditComponent {
  shipment$: Observable<Shipment> = this.dataSvc.getShipment(this.route.snapshot.params.id);

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  update(shipment: Shipment) {
    this.dataSvc.saveShipment(shipment);
  }
}

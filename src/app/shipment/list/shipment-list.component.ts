import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistenceService } from '../shared/persistence.service';
import { Shipment } from '../shared/shipment.interfaces';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html'
})
export class ShipmentListComponent {
  shipments$: Observable<Shipment[]> = this.dbService.getAll();

  constructor(private dbService: PersistenceService) {}
}

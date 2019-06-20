import { Component } from '@angular/core';
import { Shipment } from '../../shared/models/shipment';
import { AngularFirestore } from '@angular/fire/firestore';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipments-list.component.html'
})
export class ShipmentsListComponent {
  shipments$ = this.afs.collection<Shipment>('shipments').valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore) {
  }
}

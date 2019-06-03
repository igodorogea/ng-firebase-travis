import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Shipment } from './shipment.interfaces';

@Injectable()
export class PersistenceService {
  shipmentCollection: AngularFirestoreCollection<Shipment> = this.afs.collection('menus');

  constructor(private readonly afs: AngularFirestore) { }

  getAll() {
    return this.shipmentCollection.valueChanges();
  }

  getMenu(id: string) {
    return this.shipmentCollection.doc<Shipment>(id).valueChanges();
  }
}

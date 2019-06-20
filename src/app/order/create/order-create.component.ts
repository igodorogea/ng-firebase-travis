import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {
  ordersCol: AngularFirestoreCollection<Order> = this.afs.collection('orders');

  constructor(
    public location: Location,
    private readonly afs: AngularFirestore,
  ) {}

  async create(order: Order) {
    order.id = this.afs.createId();
    await this.ordersCol.doc(order.id).set(order);
    this.location.back();
  }
}

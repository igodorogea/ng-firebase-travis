import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../../shared/models/order';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-menu-create',
  templateUrl: './order-edit.component.html'
})
export class OrderEditComponent {
  orderDoc = this.afs.collection('orders').doc<Order>(this.route.snapshot.params.id);
  order$ = this.orderDoc.valueChanges();
  routes = appRoutes;

  constructor(
    public location: Location,
    private readonly afs: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async update(order: Order) {
    await this.orderDoc.update(order);
    await this.router.navigate([this.routes.order.LIST]);
  }
}

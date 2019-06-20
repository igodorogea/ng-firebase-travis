import { Component, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { buildCrudRoutes } from '../../shared/routes.util';
import { Order } from '../../shared/models/order';
import { Product } from '../../shared/models/product';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-order-list',
  templateUrl: './orders-list.component.html'
})
export class OrdersListComponent {
  orders$ = this.afs.collection<Order>('orders').valueChanges();
  products$ = this.afs.collection<Product>('products').valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore) {}

  getOrderTotal(order: Order, products: Product[]): number {
    return order.orderLines.reduce((acc, { productId, qty }) => {
      const product = products.find(p => p.id === productId);
      if (productId && product) {
        acc += product.price * qty;
      }
      return acc;
    }, 0);
  }
}

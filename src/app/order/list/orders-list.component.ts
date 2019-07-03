import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../../shared/models/order';
import { Product } from '../../shared/models/product';
import { appRoutes } from '../../shared/routes.config';
import { AuthService } from '../../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './orders-list.component.html'
})
export class OrdersListComponent {
  orders$ = this.auth.user$.pipe(
    switchMap(user => this.afs.collection<Order>('orders', ref => ref.where('userId', '==', user.uid)).valueChanges())
  );
  products$ = this.afs.collection<Product>('products').valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore, private auth: AuthService) {}

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

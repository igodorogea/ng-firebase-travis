import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../../shared/models/order';
import { Product } from '../../shared/models/product';
import { map, switchMap } from 'rxjs/operators';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent {
  orderDoc = this.afs.collection('orders').doc<Order>(this.route.snapshot.params.id);
  order$ = this.afs.collection<Product>('products').valueChanges().pipe(
    switchMap(products => this.orderDoc.valueChanges().pipe(
      map(o => {
        o.orderLines.forEach(ol => {
          const product = products.find(p => p.id === ol.productId);
          ol.price = product.price * ol.qty;
          ol.productName = product.name;
        });
        return o;
      })
    )));
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {}

  getOrderTotal(order: Order): number {
    return order.orderLines.reduce((acc, { price }) => acc + price, 0);
  }

  async removeOrder() {
    await this.orderDoc.delete();
    await this.router.navigate([this.routes.order.LIST]);
  }
}

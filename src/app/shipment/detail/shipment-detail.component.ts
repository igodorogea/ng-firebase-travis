import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Shipment } from '../../shared/models/shipment';
import { appRoutes } from '../../shared/routes.config';
import { Order } from '../../shared/models/order';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-shipment-detail',
  templateUrl: './shipment-detail.component.html'
})
export class ShipmentDetailComponent {
  shipment$ = this.afs.collection('shipments').doc<Shipment>(this.route.snapshot.params.id).valueChanges();
  orders$ = this.afs.collection<Order>('orders', ref => ref.where('shipmentId', '==', this.route.snapshot.params.id)).valueChanges();
  products$ = this.afs.collection<Product>('products').valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {}

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

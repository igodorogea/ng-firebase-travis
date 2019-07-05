import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from './models/product';
import { Shipment } from './models/shipment';
import { Order } from './models/order';
import { User } from '../../auth/user.model';
import { Entity } from './models/entity';
import { AuthService } from '../../auth/auth.service';

function calculateOrderTotal([orders, products]: [Order[], Product[]]): Order[] {
  orders.forEach(order => {
    order.total = order.orderLines.reduce((acc, { productId, qty }) => {
      const product = products.find(p => p.id === productId);
      if (productId && product) {
        acc += product.price * qty;
      }
      return acc;
    }, 0);
  });
  return orders;
}

@Injectable()
export class DataService {
  constructor(
    private readonly authSvc: AuthService,
    private readonly afs: AngularFirestore,
  ) {}

  getUsers() {
    return this.afs.collection<User>('users').valueChanges();
  }

  getAdmins() {
    return this.afs.collection<{ uid: string }>('admins').valueChanges();
  }

  getAdminsUids() {
    return this.getAdmins().pipe(
      map(admins => admins.map(admin => admin.uid))
    );
  }

  getProducts() {
    return this.afs.collection<Product>('products').valueChanges();
  }

  getProduct(productId) {
    return this.afs.collection('products').doc<Product>(productId).valueChanges();
  }

  getShipments() {
    return this.afs.collection<Shipment>('shipments').valueChanges();
  }

  getShipment(shipmentId) {
    return this.afs.collection('shipments').doc<Shipment>(shipmentId).valueChanges();
  }

  getShipmentOrders(shipmentId) {
    return combineLatest([
      this.afs.collection<Order>(
        'orders',
        ref => ref.where('shipmentId', '==', shipmentId)
      ).valueChanges(),
      this.getProducts()
    ]).pipe(
      map(calculateOrderTotal)
    );
  }

  getUserOrders() {
    return combineLatest([
      this.afs.collection<Order>(
        'orders',
        ref => this.authSvc.user.claims.admin ? ref : ref.where('userId', '==', this.authSvc.user.uid)
      ).valueChanges(),
      this.getProducts()
    ]).pipe(
      map(calculateOrderTotal)
    );
  }

  getOrder(orderId) {
    return this.afs.collection('orders').doc<Order>(orderId).valueChanges();
  }

  getOrderDetails(orderId) {
    return this.getProducts().pipe(
      switchMap(products => this.getOrder(orderId).pipe(
        map(o => {
          o.orderLines.forEach(ol => {
            const product = products.find(p => p.id === ol.productId);
            ol.price = product.price * ol.qty;
            ol.productName = product.name;
          });
          return o;
        }))));
  }

  saveOrder(order) {
    return this.saveDoc(order, 'orders');
  }

  deleteOrder(orderId) {
    return this.deleteDoc(orderId, 'orders');
  }

  saveProduct(product) {
    return this.saveDoc(product, 'products');
  }

  saveShipment(shipment) {
    return this.saveDoc(shipment, 'shipments');
  }

  private async saveDoc(doc, col) {
    const newDoc = await this.hydrateDoc(doc);
    return this.afs.collection(col).doc(newDoc.id).set(newDoc, { merge: true });
  }

  private deleteDoc(docId, col) {
    return this.afs.collection(col).doc(docId).delete();
  }

  private async hydrateDoc(doc: Entity) {
    const newFields: any = {};
    if (!doc.id) {
      newFields.id = this.afs.createId();
      newFields.crdate = new Date().getTime();
      newFields.cruserId = this.authSvc.user.uid;
    } else {
      newFields.tstamp = new Date().getTime();
    }
    return {
      ...doc,
      ...newFields
    };
  }
}

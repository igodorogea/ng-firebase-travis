import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';
import { AngularFirestore } from '@angular/fire/firestore';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  products$ = this.afs.collection<Product>('products').valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore) {}
}

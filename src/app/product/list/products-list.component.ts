import { Component } from '@angular/core';
import { Product } from '../../shared/models/product';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { buildCrudRoutes } from '../product.util';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  products$ = this.afs.collection<Product>('products').valueChanges();
  routes = buildCrudRoutes(this.router, this.route);

  constructor(private readonly afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
    console.log(route);
  }
}

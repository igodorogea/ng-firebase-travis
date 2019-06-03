import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../shared/models/product';
import { buildCrudRoutes } from '../product.util';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  product$ = this.afs.collection('products').doc<Product>(this.route.snapshot.params.id).valueChanges();
  routes = buildCrudRoutes(this.router, this.route);

  constructor(private readonly afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
  }
}

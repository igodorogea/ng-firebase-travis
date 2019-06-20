import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../shared/models/product';
import { buildCrudRoutes } from '../../shared/routes.util';
import { appRoutes } from '../../shared/routes.config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent {
  product$ = this.afs.collection('products').doc<Product>(this.route.snapshot.params.id).valueChanges();
  routes = appRoutes;

  constructor(private readonly afs: AngularFirestore, private router: Router, private route: ActivatedRoute) {
  }
}

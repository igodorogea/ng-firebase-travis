import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../shared/models/product';
import { FormBuilder, Validators } from '@angular/forms';
import { buildCrudRoutes } from '../product.util';

@Component({
  selector: 'app-menu-create',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {
  product = this.afs.collection('products').doc<Product>(this.route.snapshot.params.id);
  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: [''],
    price: [0, [Validators.required]],
  });
  routes = buildCrudRoutes(this.router, this.route);

  constructor(
    private readonly afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.product.valueChanges().subscribe(product => this.productForm.setValue(product));
  }

  async update() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      await this.product.update(product);
      await this.router.navigate([this.routes.LIST]);
    }
  }
}

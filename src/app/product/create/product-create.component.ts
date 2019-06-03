import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../../shared/models/product';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  productCol: AngularFirestoreCollection<Product> = this.afs.collection('products');
  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: [''],
    price: [0, [Validators.required]],
  });

  constructor(
    private readonly afs: AngularFirestore,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async create() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      product.id = this.afs.createId();
      await this.productCol.doc(product.id).set(product);
      await this.router.navigate(['..'], { relativeTo: this.route });
    }
  }
}

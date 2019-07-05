import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {
  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: [''],
    price: [0, [Validators.required]],
  });
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dataSvc.getProduct(this.route.snapshot.params.id)
      .subscribe(product => this.productForm.setValue(product));
  }

  async update() {
    if (this.productForm.valid) {
      await this.dataSvc.saveProduct(this.productForm.value);
      await this.router.navigate([this.routes.product.LIST]);
    }
  }
}

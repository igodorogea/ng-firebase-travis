import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html'
})
export class ProductCreateComponent {
  productForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: [''],
    price: [0, [Validators.required]],
  });

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async create() {
    if (this.productForm.valid) {
      await this.dataSvc.saveProduct(this.productForm.value);
      await this.router.navigate(['..'], { relativeTo: this.route });
    }
  }
}

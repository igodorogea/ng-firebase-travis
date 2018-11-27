import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateProductsListService } from './create-products-list.service';

@Component({
  selector: 'app-new-product-list',
  templateUrl: './create-products-list.component.html',
  styleUrls: ['./create-products-list.component.scss']
})
export class CreateProductsListComponent {
  cplForm: FormGroup = this.cplService.getProductsListForm();

  constructor(private cplService: CreateProductsListService) {}

  get products() {
    return this.cplService.getProductsFormControl(this.cplForm);
  }

  addProduct() {
    this.cplService.addProductToForm(this.cplForm);
  }

  async save() {
    if (this.cplForm.valid) {
      const success = await this.cplService.saveProductsList(this.cplForm.value);
      console.log(success);
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CreateProductsListService } from './create-products-list.service';
import { RemoveProductDialog } from './remove-product.dialog';
import { routerStates } from '../../router.states';

@Component({
  selector: 'app-new-product-list',
  templateUrl: './create-products-list.component.html',
  styleUrls: ['./create-products-list.component.scss']
})
export class CreateProductsListComponent {
  cplForm: FormGroup = this.cplService.getProductsListForm();

  constructor(
    private cplService: CreateProductsListService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  get products() {
    return this.cplService.getProductsFormControl(this.cplForm);
  }

  getProductHeader(i) {
    const name = this.cplService.getProductName(this.cplForm, i);
    return name ? name : 'New Product';
  }

  addProduct() {
    this.cplService.addProductToForm(this.cplForm);
  }

  deleteProduct(ev: MouseEvent, i: number) {
    ev.stopPropagation();
    this.dialog.open(RemoveProductDialog)
      .afterClosed()
      .subscribe(result => {
        if (result === true) {
          this.cplService.removeProductFromForm(this.cplForm, i);
        }
      });
  }

  async create() {
    if (this.cplForm.valid) {
      await this.cplService.saveProductsList(this.cplForm.value);
      await this.router.navigate([routerStates.list]);
      this.cplForm.reset();
    }
  }
}

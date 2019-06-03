import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCT_ROUTES } from './product.routes';
import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './list/products-list.component';
import { ProductCreateComponent } from './create/product-create.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCT_ROUTES),
    SharedModule,
  ],
  providers: []
})
export class ProductModule {}

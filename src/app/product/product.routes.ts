import { Routes } from '@angular/router';
import { CREATE, DETAIL, EDIT, LIST } from './product.util';
import { ProductsListComponent } from './list/products-list.component';
import { ProductCreateComponent } from './create/product-create.component';
import { ProductDetailComponent } from './detail/product-detail.component';
import { ProductEditComponent } from './edit/product-edit.component';

export const PRODUCT_ROUTES: Routes = [
  { path: LIST, component: ProductsListComponent },
  { path: CREATE, component: ProductCreateComponent },
  { path: `${DETAIL}/:id`, component: ProductDetailComponent },
  { path: `${EDIT}/:id`, component: ProductEditComponent },
];

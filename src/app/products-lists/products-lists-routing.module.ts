import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListsComponent } from './products-lists.component';
import { CreateProductsListComponent } from './components/create/create-products-list.component';

const routes: Routes = [
  { path: '', component: ProductsListsComponent },
  { path: 'new', component: CreateProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListsRoutingModule {}

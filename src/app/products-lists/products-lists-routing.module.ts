import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListsComponent } from './products-lists.component';
import { CreateProductsListComponent } from './components/create/create-products-list.component';
import { routerStates } from './router.states';

const routes: Routes = [
  { path: routerStates.list, component: ProductsListsComponent },
  { path: routerStates.create, component: CreateProductsListComponent },
  { path: routerStates.edit(':id'), component: CreateProductsListComponent },
  { path: routerStates.detail(':id'), component: CreateProductsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path: '', redirectTo: '/products-list', pathMatch: 'full'},
  {path: 'products-list', component: ProductListComponent},
  {path: 'products-list', component: ProductListComponent},
  {path: 'orders', component: OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

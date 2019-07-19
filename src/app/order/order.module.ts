import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { OrdersListComponent } from './list/orders-list.component';
import { OrderCreateComponent } from './create/order-create.component';
import { OrderDetailComponent } from './detail/order-detail.component';
import { OrderEditComponent } from './edit/order-edit.component';
import { OrderFormComponent } from './shared/form/order-form.component';
import { OrderLinePricePipe } from './shared/form/order-line-price.pipe';
import { OrderTotalPipe } from './shared/form/order-total.pipe';

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderCreateComponent,
    OrderDetailComponent,
    OrderEditComponent,
    OrderFormComponent,
    OrderLinePricePipe,
    OrderTotalPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    OrdersListComponent
  ],
  providers: []
})
export class OrderModule {}

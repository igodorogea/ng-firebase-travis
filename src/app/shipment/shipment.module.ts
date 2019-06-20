import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ShipmentsListComponent } from './list/shipments-list.component';
import { ShipmentCreateComponent } from './create/shipment-create.component';
import { ShipmentDetailComponent } from './detail/shipment-detail.component';
import { ShipmentEditComponent } from './edit/shipment-edit.component';

@NgModule({
  declarations: [
    ShipmentsListComponent,
    ShipmentCreateComponent,
    ShipmentDetailComponent,
    ShipmentEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: []
})
export class ShipmentModule {}

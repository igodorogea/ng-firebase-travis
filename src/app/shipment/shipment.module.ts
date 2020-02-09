import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ShipmentsListComponent } from './list/shipments-list.component';
import { ShipmentCreateComponent } from './create/shipment-create.component';
import { ShipmentDetailComponent } from './detail/shipment-detail.component';
import { ShipmentEditComponent } from './edit/shipment-edit.component';
import { ShipmentFormComponent } from './shared/form/shipment-form.component';

@NgModule({
  declarations: [
    ShipmentsListComponent,
    ShipmentCreateComponent,
    ShipmentDetailComponent,
    ShipmentEditComponent,
    ShipmentFormComponent,
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

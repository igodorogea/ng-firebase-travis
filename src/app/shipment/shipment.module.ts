import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PersistenceService } from './shared/persistence.service';
import { ShipmentListComponent } from './list/shipment-list.component';

@NgModule({
  declarations: [
    ShipmentListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [PersistenceService]
})
export class ShipmentModule {}

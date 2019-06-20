import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { RemoveItemDialog } from './remove-item.dialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContainerComponent,
    RemoveItemDialog
  ],
  entryComponents: [RemoveItemDialog],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    ContainerComponent,
  ],
  imports: [
    MaterialModule
  ]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    ContainerComponent
  ]
})
export class SharedModule {}

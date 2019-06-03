import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FireCrudComponent } from './fire-crud.component';

@NgModule({
  declarations: [
    FireCrudComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FireCrudComponent
  ]
})
export class FireCrudModule {
}

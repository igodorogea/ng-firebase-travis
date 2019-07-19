import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material';
import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';
import { ContainsPipe } from './contains.pipe';

@NgModule({
  declarations: [
    UsersComponent,
    ContainsPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSlideToggleModule,
  ]
})
export class UsersModule {}

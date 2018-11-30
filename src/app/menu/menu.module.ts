import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MenuListComponent } from './list/menu-list.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { RemoveMenuItemDialog } from './shared/remove-menu-item.dialog';
import { PersistenceService } from './shared/persistence.service';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { MenuEditComponent } from './edit/menu-edit.component';
import { MenuFormComponent } from './shared/menu-form/menu-form.component';

@NgModule({
  declarations: [
    MenuListComponent,
    MenuCreateComponent,
    RemoveMenuItemDialog,
    MenuDetailComponent,
    MenuEditComponent,
    MenuFormComponent
  ],
  entryComponents: [RemoveMenuItemDialog],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [PersistenceService]
})
export class MenuModule {}

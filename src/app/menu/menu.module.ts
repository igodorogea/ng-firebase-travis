import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './list/menu-list.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { RemoveMenuItemDialog } from './create/remove-menu-item.dialog';
import { PersistenceService } from './shared/persistence.service';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { SharedModule } from '../shared/shared.module';
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
    SharedModule,
    MenuRoutingModule
  ],
  providers: [PersistenceService]
})
export class MenuModule {}

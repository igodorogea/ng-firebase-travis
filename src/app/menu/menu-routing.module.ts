import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './list/menu-list.component';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuEditComponent } from './edit/menu-edit.component';
import { menuRouterStates } from './shared/menu-router.states';

const routes: Routes = [
  { path: menuRouterStates.list, component: MenuListComponent },
  { path: menuRouterStates.detail(':id'), component: MenuDetailComponent },
  { path: menuRouterStates.create, component: MenuCreateComponent },
  { path: menuRouterStates.edit(':id'), component: MenuEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}

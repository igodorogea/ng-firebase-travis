import { Routes } from '@angular/router';
import { MenuListComponent } from './list/menu-list.component';
import { MenuDetailComponent } from './detail/menu-detail.component';
import { MenuCreateComponent } from './create/menu-create.component';
import { MenuEditComponent } from './edit/menu-edit.component';
import { menuRoutesNames } from './menu.routes.names';

export const MENU_ROUTES: Routes = [
  { path: '', redirectTo: menuRoutesNames.LIST, pathMatch: 'prefix' },
  { path: menuRoutesNames.LIST, component: MenuListComponent },
  { path: menuRoutesNames.CREATE, component: MenuCreateComponent },
  { path: menuRoutesNames.DETAIL + '/:id', component: MenuDetailComponent },
  { path: menuRoutesNames.EDIT + '/:id', component: MenuEditComponent }
];

import { Routes } from '@angular/router';
import { appRoutesNames } from './app.routes.names';
import { MENU_ROUTES } from './menu/menu.routes';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/' + appRoutesNames.MENU, pathMatch: 'full' },
  { path: appRoutesNames.MENU, children: MENU_ROUTES }
];

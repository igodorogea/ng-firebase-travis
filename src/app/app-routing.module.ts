import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRouterStates as appStates } from './shared/app-router.states';

const routes: Routes = [
  { path: appStates.home.path, redirectTo: appStates.menus.path, pathMatch: 'full' },
  { path: appStates.menus.path, loadChildren: './menu/menu.module#MenuModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

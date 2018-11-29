import { Component } from '@angular/core';
import { appRouterStates } from './shared/app-router.states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navMenu = [
    appRouterStates.home,
    appRouterStates.menus,
    appRouterStates.orders
  ];

  constructor() {}
}

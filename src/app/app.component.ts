import { Component } from '@angular/core';
import { appRoutesNames } from './app.routes.names';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuLink = './' + appRoutesNames.MENU;
  orderLink = './' + appRoutesNames.ORDER;

  constructor() {}
}

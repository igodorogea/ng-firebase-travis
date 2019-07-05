import { Component } from '@angular/core';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './orders-list.component.html'
})
export class OrdersListComponent {
  orders$ = this.dataSvc.getUserOrders();
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private auth: AuthService
  ) {}
}

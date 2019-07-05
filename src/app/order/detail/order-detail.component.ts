import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../shared/persistence/models/order';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent {
  order$ = this.dataSvc.getOrderDetails(this.route.snapshot.params.id);
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  getOrderTotal(order: Order): number {
    return order.orderLines.reduce((acc, { price }) => acc + price, 0);
  }

  async removeOrder(orderId) {
    await this.dataSvc.deleteOrder(orderId);
    await this.router.navigate([this.routes.order.LIST]);
  }
}

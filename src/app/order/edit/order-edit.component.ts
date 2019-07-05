import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../shared/persistence/models/order';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-create',
  templateUrl: './order-edit.component.html'
})
export class OrderEditComponent {
  order$ = this.dataSvc.getOrder(this.route.snapshot.params.id);
  routes = appRoutes;

  constructor(
    public location: Location,
    private dataSvc: DataService,
    private route: ActivatedRoute
  ) {}

  async update(order: Order) {
    await this.dataSvc.saveOrder(order);
    this.location.back();
  }
}

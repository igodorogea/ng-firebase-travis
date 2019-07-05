import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Order } from '../../shared/persistence/models/order';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent {
  constructor(
    public location: Location,
    private dataSvc: DataService
  ) {}

  async create(order: Order) {
    await this.dataSvc.saveOrder(order);
    this.location.back();
  }
}

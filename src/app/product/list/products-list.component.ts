import { Component } from '@angular/core';
import { appRoutes } from '../../shared/routing/routes.config';
import { DataService } from '../../shared/persistence/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent {
  products$ = this.dataSvc.getProducts();
  routes = appRoutes;

  constructor(private dataSvc: DataService) {}
}

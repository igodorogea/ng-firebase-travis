import { Component } from '@angular/core';
import { PersistenceService } from './shared/persistence.service';
import { routerStates } from './router.states';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-lists.component.html',
  styleUrls: ['./products-lists.component.scss']
})
export class ProductsListsComponent {
  lists$ = this.dataSvc.getAll();
  routerStates = routerStates;

  constructor(private dataSvc: PersistenceService) {}
}

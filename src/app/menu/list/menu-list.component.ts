import { Component } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';
import { menuRouterStates } from '../shared/menu-router.states';
import { Menu } from '../shared/menu.interfaces';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@Component({
  selector: 'app-product-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent extends AutoUnsubscribe {
  menus: Menu[];
  routerStates = menuRouterStates;

  constructor(private dbService: PersistenceService) {
    super();
    this.subscriptions.push(
      this.dbService.getAll().subscribe(menus => this.menus = menus)
    );
  }
}

import { Component } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';
import { Menu } from '../shared/menu.interfaces';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';
import { menuRoutesNames } from '../menu.routes.names';

@Component({
  selector: 'app-product-list',
  templateUrl: './menu-list.component.html'
})
export class MenuListComponent extends AutoUnsubscribe {
  menus: Menu[];
  menuCreateLink = '../' + menuRoutesNames.CREATE;
  menuDetailLink = '../' + menuRoutesNames.DETAIL;
  menuEditLink = '../' + menuRoutesNames.EDIT;

  constructor(private dbService: PersistenceService) {
    super();
    this.subscriptions.push(
      this.dbService.getAll().subscribe(menus => this.menus = menus)
    );
  }
}

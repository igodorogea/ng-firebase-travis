import { Component } from '@angular/core';
import { PersistenceService } from '../shared/persistence.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Menu } from '../shared/menu.interfaces';
import { AutoUnsubscribe } from '../../shared/auto-unsubscribe';

@Component({
  selector: 'app-detail',
  templateUrl: './menu-detail.component.html'
})
export class MenuDetailComponent extends AutoUnsubscribe {
  menu: Menu;

  constructor(
    private route: ActivatedRoute,
    private dataSvc: PersistenceService
  ) {
    super();
    this.subscriptions.push(
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.subscriptions.push(
          this.dataSvc.getMenu(params.get('id')).subscribe(menu => this.menu = menu)
        );
      })
    );
  }
}

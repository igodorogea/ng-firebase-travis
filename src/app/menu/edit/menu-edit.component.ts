import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PersistenceService } from '../shared/persistence.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { menuRoutesNames } from '../menu.routes.names';
import { Menu } from '../shared/menu.interfaces';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html'
})
export class MenuEditComponent {
  menu$: Observable<Menu>;

  constructor(
    private dbService: PersistenceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dbService.getMenu(params.get('id')))
    );
  }

  async update(menu) {
    await this.dbService.updateMenu(menu);
    await this.router.navigate(['../../' + menuRoutesNames.LIST], { relativeTo: this.route });
  }
}

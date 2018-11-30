import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PersistenceService } from '../shared/persistence.service';
import { menuRoutesNames } from '../menu.routes.names';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html'
})
export class MenuCreateComponent {
  constructor(
    private dbService: PersistenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async create(menu) {
    await this.dbService.addMenu(menu);
    await this.router.navigate(['../' + menuRoutesNames.LIST], { relativeTo: this.route });
  }
}

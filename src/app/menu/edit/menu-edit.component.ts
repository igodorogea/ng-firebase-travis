import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PersistenceService } from '../shared/persistence.service';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../shared/menu.interfaces';
import { switchMap } from 'rxjs/operators';
import { menuRouterStates } from '../shared/menu-router.states';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent {
  menu$: Observable<Menu>;

  constructor(
    private fb: FormBuilder,
    private dbService: PersistenceService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.menu$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.dbService.getMenu(params.get('id')))
    );
  }

  log(ref) {
    console.log(ref);
  }

  async update(menu) {
    await this.dbService.updateMenu(menu);
    await this.router.navigate([menuRouterStates.list]);
  }
}

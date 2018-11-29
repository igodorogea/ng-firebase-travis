import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RemoveMenuItemDialog } from './remove-menu-item.dialog';
import { menuRouterStates } from '../shared/menu-router.states';
import { PersistenceService } from '../shared/persistence.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss']
})
export class MenuCreateComponent {
  menuForm: FormGroup = this.buildForm();

  constructor(
    private fb: FormBuilder,
    private dbService: PersistenceService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  getMenuItems(): FormArray {
    return this.menuForm.get('items') as FormArray;
  }

  getMenuItemTitle(i): string {
    const name = this.menuForm.get(`items.${i}.name`).value;
    return name ? name : 'New Product';
  }

  addMenuItem() {
    this.getMenuItems().push(this.createMenuItem());
  }

  removeItem(ev: MouseEvent, i: number) {
    ev.stopPropagation();
    this.dialog.open(RemoveMenuItemDialog)
      .afterClosed()
      .subscribe(result => {
        if (result === true) {
          this.getMenuItems().removeAt(i);
        }
      });
  }

  async create() {
    if (this.menuForm.valid) {
      await this.dbService.addMenu(this.menuForm.value);
      await this.router.navigate([menuRouterStates.list]);
      this.menuForm.reset();
    }
  }

  private buildForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      items: this.fb.array([
        this.createMenuItem()
      ], [Validators.required])
    });
  }

  private createMenuItem() {
    return this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
}

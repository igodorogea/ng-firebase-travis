import { MatDialog } from '@angular/material/dialog';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { PersistenceService } from '../persistence.service';
import { RemoveMenuItemDialog } from '../remove-menu-item.dialog';
import { AutoUnsubscribe } from '../../../shared/auto-unsubscribe';
import { Menu } from '../menu.interfaces';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.scss']
})
export class MenuFormComponent extends AutoUnsubscribe implements OnInit {
  @Input() menu$: Observable<Menu>;
  @Output() formSubmit = new EventEmitter();
  menuForm: FormGroup = this.buildForm();

  constructor(
    private fb: FormBuilder,
    private dbService: PersistenceService,
    private dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit() {
    if (this.menu$) {
      this.subscriptions.push(
        this.menu$.subscribe(menu => this.patchForm(menu))
      );
    }
  }

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

  submit() {
    if (this.menuForm.valid) {
      this.formSubmit.emit(this.menuForm.value);
    }
  }

  private createMenuItem() {
    return this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  private buildForm() {
    return this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      items: this.fb.array([
        this.createMenuItem()
      ], [Validators.required])
    });
  }

  private patchForm(menu: Menu) {
    const diff = this.getMenuItems().length - menu.items.length;
    if (diff < 0) {
      // need to add items to form
      for (let i = 0; i > diff; i--) {
        this.getMenuItems().push(this.createMenuItem());
      }
    } else if (diff > 0) {
      // need to remove items from form
      for (let i = 0; i < diff; i++) {
        this.getMenuItems().removeAt(this.getMenuItems().length - 1);
      }
    }
    this.menuForm.patchValue(<any>menu);
  }
}

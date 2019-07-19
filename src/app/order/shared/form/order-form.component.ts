import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../shared/persistence/models/order';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/persistence/models/product';
import { RemoveItemDialogComponent } from '../../../shared/presentation/remove-item-dialog.component';
import { DataService } from '../../../shared/persistence/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnChanges {
  @Input() order: Order;
  @Output() formSubmit = new EventEmitter();
  orderForm: FormGroup = this.buildForm();
  products$ = this.dataSvc.getProducts();

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    public location: Location,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.order && this.order) {
      this.patchForm(this.order);
    }
  }

  get orderLines(): FormArray {
    return this.orderForm.get('orderLines') as FormArray;
  }

  addOrderLine() {
    this.orderLines.push(this.createOrderLine());
  }

  removeOrderLine(ev: MouseEvent, i: number) {
    ev.stopPropagation();
    this.dialog.open(RemoveItemDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if (result === true) {
          this.orderLines.removeAt(i);
          if (this.orderLines.length === 0) {
            this.addOrderLine();
          }
        }
      });
  }

  submit() {
    if (this.orderForm.valid) {
      this.formSubmit.emit(this.orderForm.value);
    }
  }

  private createOrderLine() {
    return this.fb.group({
      productId: [null, [Validators.required]],
      qty: [1, [Validators.required]]
    });
  }

  private buildForm() {
    return this.fb.group({
      id: [''],
      shipmentId: [this.route.snapshot.params.shipmentId],
      orderLines: this.fb.array([
        this.createOrderLine()
      ], [Validators.required])
    });
  }

  private patchForm(order: Order) {
    const diff = this.orderLines.length - order.orderLines.length;
    if (diff < 0) {
      // need to add items to form
      for (let i = 0; i > diff; i--) {
        this.orderLines.push(this.createOrderLine());
      }
    } else if (diff > 0) {
      // need to remove items from form
      for (let i = 0; i < diff; i++) {
        this.orderLines.removeAt(this.orderLines.length - 1);
      }
    }
    this.orderForm.patchValue(order);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoUnsubscribe } from '../../../shared/auto-unsubscribe';
import { Observable } from 'rxjs';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../../../shared/models/order';
import { Menu } from '../../../menu/shared/menu.interfaces';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../../../shared/models/product';
import { RemoveItemDialog } from '../../../shared/remove-item.dialog';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent extends AutoUnsubscribe implements OnInit {
  @Input() order$: Observable<Order>;
  @Output() formSubmit = new EventEmitter();
  orderForm: FormGroup = this.buildForm();
  products$ = this.afs.collection<Product>('products').valueChanges();

  constructor(
    private readonly afs: AngularFirestore,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    if (this.order$) {
      this.subscriptions.push(
        this.order$.subscribe(order => this.patchForm(order))
      );
    }
  }

  get orderLines(): FormArray {
    return this.orderForm.get('orderLines') as FormArray;
  }

  getOrderLinePrice(i: number, products: Product[]): number {
    const productId = this.orderLines.value[i].productId;
    const product = products.find(p => p.id === productId);
    if (productId && product) {
      return product.price * this.orderLines.value[i].qty;
    }
    return 0;
  }

  getOrderTotal(products: Product[]): number {
    return this.orderLines.value.reduce((acc, { productId, qty }) => {
      const product = products.find(p => p.id === productId);
      if (productId && product) {
        acc += product.price * qty;
      }
      return acc;
    }, 0);
  }

  addOrderLine() {
    this.orderLines.push(this.createOrderLine());
  }

  removeOrderLine(ev: MouseEvent, i: number) {
    ev.stopPropagation();
    this.dialog.open(RemoveItemDialog)
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

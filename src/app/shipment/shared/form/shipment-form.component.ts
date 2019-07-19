import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/persistence/data.service';
import { Shipment } from '../../../shared/persistence/models/shipment';
import { appRoutes } from '../../../shared/routing/routes.config';

@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html'
})
export class ShipmentFormComponent implements OnChanges {
  @Input() shipment: Shipment;
  @Output() formSubmit = new EventEmitter();
  shipmentForm: FormGroup = this.buildForm();
  routes = appRoutes;

  constructor(
    private dataSvc: DataService,
    private fb: FormBuilder,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.shipment) {
      this.shipmentForm.patchValue(this.shipment);
    }
  }

  submit() {
    if (this.shipmentForm.valid) {
      const shipment: Shipment = this.shipmentForm.value;
      this.formSubmit.emit({
        ...shipment,
        endDate: (shipment.endDate as unknown as Date).toISOString()
      });
    }
  }

  private buildForm() {
    return this.fb.group({
      id: [''],
      description: [''],
      endDate: [0, [Validators.required]]
    });
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class CreateProductsListService {
  constructor(private readonly afs: AngularFirestore, private fb: FormBuilder) { }

  getProductsFormControl(form: FormGroup): FormArray {
    return <FormArray>form.get('products');
  }

  getProductName(form: FormGroup, i: number) {
    return form.get(`products.${i}.name`).value;
  }

  getProductsListForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      products: this.fb.array([
        this.buildProductFormGroup()
      ])
    });
  }

  addProductToForm(form: FormGroup) {
    (<FormArray>form.get('products')).push(this.buildProductFormGroup());
  }

  removeProductFromForm(form: FormGroup, i: number) {
    (<FormArray>form.get('products')).removeAt(i);
  }

  saveProductsList(value) {
    return this.afs.collection('productsLists').add(value);
  }

  private buildProductFormGroup() {
    return this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
}

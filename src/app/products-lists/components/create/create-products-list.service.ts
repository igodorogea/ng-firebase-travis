import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Injectable()
export class CreateProductsListService {
  constructor(private readonly afs: AngularFirestore, private fb: FormBuilder) { }

  getProductsFormControl(form: FormGroup): FormArray {
    return <FormArray>form.get('products');
  }

  getProductsListForm() {
    return this.fb.group({
      name: [''],
      products: this.fb.array([
        this.buildProductFormGroup()
      ])
    });
  }

  addProductToForm(form: FormGroup) {
    (<FormArray>form.get('products')).push(this.buildProductFormGroup());
  }

  saveProductsList(value) {
    return this.afs.collection('productsLists').add(value);
  }

  private buildProductFormGroup() {
    return this.fb.group({
      name: [''],
      price: [0]
    });
  }
}

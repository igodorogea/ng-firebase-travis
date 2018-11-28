import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ProductsList } from '../model/products-list.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class PersistenceService {
  col: AngularFirestoreCollection<ProductsList> = this.afs.collection('productsLists');

  constructor(private readonly afs: AngularFirestore) { }

  getAll() {
    return this.col.get().pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    );
  }
}

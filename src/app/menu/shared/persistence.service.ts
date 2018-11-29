import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Menu } from './menu.interfaces';

@Injectable()
export class PersistenceService {
  menuCol: AngularFirestoreCollection<Menu> = this.afs.collection('menus');

  constructor(private readonly afs: AngularFirestore) { }

  getAll() {
    return this.menuCol.valueChanges();
  }

  getMenu(id: string) {
    return this.menuCol.doc<Menu>(id).valueChanges();
  }

  addMenu(newMenu: Menu) {
    // attach id for new menu element
    // and for each menu item
    newMenu.id = this.afs.createId();
    newMenu.items.forEach(m => m.id = this.afs.createId());
    return this.menuCol.doc(newMenu.id).set(newMenu);
  }

  updateMenu(newMenu: Menu) {
    // attach id for new menu items
    newMenu.items
      .filter(m => !Boolean(m.id))
      .forEach(m => m.id = this.afs.createId());
    return this.menuCol.doc(newMenu.id).update(newMenu);
  }
}

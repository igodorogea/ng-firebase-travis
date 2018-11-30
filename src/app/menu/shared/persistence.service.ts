import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Menu, MenuItem } from './menu.interfaces';

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
    this.attachIdForMenuItems(newMenu.items);
    return this.menuCol.doc(newMenu.id).set(newMenu);
  }

  updateMenu(newMenu: Menu) {
    // attach id for new menu items
    this.attachIdForMenuItems(newMenu.items.filter(m => !Boolean(m.id)));
    return this.menuCol.doc(newMenu.id).update(newMenu);
  }

  private attachIdForMenuItems(menuItems: MenuItem[]) {
    menuItems.forEach(m => m.id = this.afs.createId());
  }
}

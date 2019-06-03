import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fire-crud',
  templateUrl: './fire-crud.component.html'
})
export class FireCrudComponent implements OnInit {
  @Input() collection;
  col: AngularFirestoreCollection<any>;
  items$: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
  }

  ngOnInit() {
    this.col = this.afs.collection(this.collection);
    this.items$ = this.col.valueChanges();
  }
}

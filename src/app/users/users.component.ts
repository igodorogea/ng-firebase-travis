import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';
import { User } from '../auth/user.model';
import { MatSlideToggleChange } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$ = this.afs.collection<User>('users').valueChanges();
  admins$: Observable<string[]> = this.afs.collection<{ uid: string }>('admins').valueChanges().pipe(
    map(admins => admins.map(admin => admin.uid))
  );

  constructor(private readonly afs: AngularFirestore, private readonly aff: AngularFireFunctions) {}

  toggleAdminRole(event: MatSlideToggleChange, userId: string) {
    console.log(event.checked, userId);
    //   const callable = fns.httpsCallable('toggleAdminRole');
    //   this.data$ = callable({ userId, admin: event.checked });
  }
}

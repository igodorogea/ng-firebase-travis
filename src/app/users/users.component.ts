import { Component } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable } from 'rxjs';
import { DataService } from '../shared/persistence/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users$ = this.dataSvc.getUsers();
  adminsIds$: Observable<string[]> = this.dataSvc.getAdminsUids();
  disabledUsers: string[] = [];

  constructor(
    private dataSvc: DataService,
    private readonly aff: AngularFireFunctions
  ) {}

  toggleAdminRole(event: MatSlideToggleChange, userId: string) {
    this.disabledUsers = [
      ...this.disabledUsers,
      userId
    ];
    this.aff.httpsCallable('toggleAdminRole')({ userId, isAdmin: event.checked })
      .toPromise()
      .finally(() => this.disabledUsers = this.disabledUsers.filter(uid => uid !== userId));
  }
}

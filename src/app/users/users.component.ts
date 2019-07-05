import { Component } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { MatSlideToggleChange } from '@angular/material';
import { DataService } from '../shared/persistence/data.service';
import { AutoUnsubscribe } from '../shared/auto-unsubscribe';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends AutoUnsubscribe {
  users$ = this.dataSvc.getUsers();
  adminsIds: string[];
  private disabledUsers: string[] = [];

  constructor(
    private dataSvc: DataService,
    private readonly aff: AngularFireFunctions
  ) {
    super();
    this.subscriptions.push(
      this.dataSvc.getAdminsUids().subscribe(ids => this.adminsIds = ids)
    );
  }

  isAdmin(userId) {
    return this.adminsIds.includes(userId);
  }

  isDisabled(userId: string) {
    return this.disabledUsers.includes(userId);
  }

  toggleAdminRole(event: MatSlideToggleChange, userId: string) {
    this.disabledUsers.push(userId);
    this.aff.httpsCallable('toggleAdminRole')({ userId, isAdmin: event.checked })
      .toPromise()
      .finally(() => this.disabledUsers = this.disabledUsers.filter(uid => uid !== userId));
  }
}

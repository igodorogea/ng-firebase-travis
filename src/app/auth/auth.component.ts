import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isFetching$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  user$ = this.auth.user$.pipe(
    tap(() => this.isFetching$.next(false))
  );

  constructor(private auth: AuthService) {}

  signIn() {
    this.auth.googleSignIn();
  }

  signOut() {
    this.auth.signOut();
  }
}

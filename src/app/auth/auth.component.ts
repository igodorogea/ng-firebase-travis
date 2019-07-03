import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(public auth: AuthService) {}

  signIn() {
    this.auth.googleSignIn();
  }

  signOut() {
    this.auth.signOut();
  }
}

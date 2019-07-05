import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AutoUnsubscribe } from '../shared/auto-unsubscribe';

@Injectable({ providedIn: 'root' })
export class AuthService extends AutoUnsubscribe {
  isFetching = true;
  user: User;

  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly afs: AngularFirestore,
    private router: Router
  ) {
    super();
    this.subscriptions.push(
      combineLatest([
        this.afAuth.user,
        this.afAuth.idTokenResult
      ]).subscribe(([user, idTokenResult]) => {
        this.isFetching = false;
        this.user = user && idTokenResult
          ? { ...user, claims: idTokenResult.claims as any }
          : null;
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    await this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return this.afs.doc(`users/${data.uid}`).set(data, { merge: true });
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}

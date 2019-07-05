import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { firebaseConfig } from './firebase.config';
import { DataService } from './data.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
  ],
  providers: [
    DataService,
  ]
})
export class PersistenceModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { ShipmentModule } from './shipment/shipment.module';
import { OrderModule } from './order/order.module';
import { FireCrudModule } from './shared/fire-crud/fire-crud.module';

import { AppComponent } from './app.component';
import { firebaseConfig } from './shared/app.config';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FireCrudModule,
    ShipmentModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

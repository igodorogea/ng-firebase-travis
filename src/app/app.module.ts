import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RouterModule } from '@angular/router';
import localeMd from '@angular/common/locales/ro-MD';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from './shared/app.config';
import { APP_ROUTES_CONFIG } from './app.routing';
import { ProductModule } from './product/product.module';
import { ShipmentModule } from './shipment/shipment.module';
import { OrderModule } from './order/order.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthComponent } from './auth/auth.component';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { UsersModule } from './users/users.module';

registerLocaleData(localeMd);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES_CONFIG),
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    ProductModule,
    ShipmentModule,
    OrderModule,
    UsersModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ro-MD' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

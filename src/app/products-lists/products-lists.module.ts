import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListsRoutingModule } from './products-lists-routing.module';
import { ProductsListsComponent } from './products-lists.component';
import { AngularFireModule } from '@angular/fire';
import { firebaseConfig } from '../app.config';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CreateProductsListComponent } from './components/create/create-products-list.component';
import { CreateProductsListService } from './components/create/create-products-list.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsListsComponent,
    CreateProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsListsRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
  providers: [CreateProductsListService]
})
export class ProductsListsModule {}

import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsListsRoutingModule } from './products-lists-routing.module';
import { ProductsListsComponent } from './products-lists.component';
import { firebaseConfig } from '../app.config';
import { CreateProductsListComponent } from './components/create/create-products-list.component';
import { CreateProductsListService } from './components/create/create-products-list.service';
import { RemoveProductDialog } from './components/create/remove-product.dialog';
import { PersistenceService } from './shared/persistence.service';

@NgModule({
  declarations: [
    ProductsListsComponent,
    CreateProductsListComponent,
    RemoveProductDialog
  ],
  entryComponents: [RemoveProductDialog],
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
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule
  ],
  providers: [CreateProductsListService, PersistenceService]
})
export class ProductsListsModule {}

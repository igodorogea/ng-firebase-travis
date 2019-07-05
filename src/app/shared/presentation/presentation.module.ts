import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material';
import { ContainerComponent } from './container.component';
import { RemoveItemDialogComponent } from './remove-item-dialog.component';

@NgModule({
  declarations: [
    ContainerComponent,
    RemoveItemDialogComponent,
  ],
  entryComponents: [
    RemoveItemDialogComponent,
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    ContainerComponent,
  ]
})
export class PresentationModule {}

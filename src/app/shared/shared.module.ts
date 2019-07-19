import { NgModule } from '@angular/core';
import { PresentationModule } from './presentation/presentation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersistenceModule } from './persistence/persistence.module';
import { LeiPipe } from './lei.pipe';
import { MatListActionDirective } from './mat-list-action.directive';

@NgModule({
  exports: [
    ReactiveFormsModule,
    PresentationModule,
    PersistenceModule,
    RouterModule,
    LeiPipe,
    MatListActionDirective,
  ],
  declarations: [
    LeiPipe,
    MatListActionDirective,
  ],
})
export class SharedModule {}

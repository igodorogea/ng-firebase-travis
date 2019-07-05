import { NgModule } from '@angular/core';
import { PresentationModule } from './presentation/presentation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PersistenceModule } from './persistence/persistence.module';
import { LeiPipe } from './lei.pipe';

@NgModule({
  exports: [
    ReactiveFormsModule,
    PresentationModule,
    PersistenceModule,
    RouterModule,
    LeiPipe,
  ],
  declarations: [LeiPipe],
})
export class SharedModule {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-remove-item-dialog',
  template: `
    <h2 mat-dialog-title>You're sure about that?</h2>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Mhmm, not really...</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes, do it!</button>
    </mat-dialog-actions>
  `
})
export class RemoveItemDialog {}

import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

export class AutoUnsubscribe implements OnDestroy {
  subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}

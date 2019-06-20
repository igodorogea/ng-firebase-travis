import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <div [class]="containerClass">
      <div class="row">
        <div [class]="classNames">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class ContainerComponent {
  @Input() size: 'large' | 'medium' | 'small' | 'extra-small';
  @Input() class: string;

  get containerClass() {
    return 'container' + (this.class ? ' ' + this.class : '');
  }

  get classNames() {
    switch (this.size) {
      case 'large':
        return 'col-lg-10 offset-lg-1';
      case 'medium':
        return 'col-lg-8 offset-lg-2 col-md-10 offset-md-1';
      case 'small':
        return 'col-lg-6 offset-lg-3 col-md-8 offset-md-2';
      case 'extra-small':
        return 'col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-10 offset-sm-1';
    }
    return 'col-12';
  }
}

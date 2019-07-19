import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMatListAction]'
})
export class MatListActionDirective {
  @HostListener('click', ['$event'])
  onClick(ev: MouseEvent) {
    ev.stopPropagation();
    ev.preventDefault();
  }
}

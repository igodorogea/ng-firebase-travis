import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

@Pipe({
  name: 'lei'
})
export class LeiPipe implements PipeTransform {
  transform(value: number): string {
    return formatCurrency(value, 'ro-MD', 'lei', 'MDL', '1.2-2');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {
  transform(ids: string[], id: string): boolean {
    return ids.includes(id);
  }
}

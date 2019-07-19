import { Pipe, PipeTransform } from '@angular/core';
import { OrderLine } from '../../../shared/persistence/models/order';
import { Product } from '../../../shared/persistence/models/product';

@Pipe({
  name: 'orderTotal'
})
export class OrderTotalPipe implements PipeTransform {
  transform(orderLines: OrderLine[], products: Product[]): any {
    return orderLines.reduce((acc, { productId, qty }) => {
      const product = products.find(p => p.id === productId);
      if (product) {
        acc += product.price * qty;
      }
      return acc;
    }, 0);
  }
}

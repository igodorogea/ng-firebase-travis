import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../shared/persistence/models/product';
import { OrderLine } from '../../../shared/persistence/models/order';

@Pipe({
  name: 'orderLinePrice'
})
export class OrderLinePricePipe implements PipeTransform {
  transform(orderLine: OrderLine, products: Product[]): any {
    const { productId, qty } = orderLine;
    const product = products.find(p => p.id === productId);
    if (product) {
      return product.price * qty;
    }
    return 0;
  }
}

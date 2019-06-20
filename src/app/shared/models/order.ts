import { Entity } from './entity';

export interface Order extends Entity {
  shipmentId: string;
  orderLines: OrderLine[];
  owner: string;
  date: number;
  total: number;
}

export interface OrderLine {
  productId: string;
  qty: number;
  price?: number;
  productName?: string;
}

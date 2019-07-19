import { Entity } from './entity';

export interface Shipment extends Entity {
  description?: string;
  endDate: string;
  archived: boolean;
}

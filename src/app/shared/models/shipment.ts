import { firestore } from 'firebase/app';
import { Entity } from './entity';
import Timestamp = firestore.Timestamp;

export interface Shipment extends Entity {
  date: Timestamp;
  description?: string;
}

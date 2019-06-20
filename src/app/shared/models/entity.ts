import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface Entity {
  id: string;
  createAt: Timestamp;
  updateAt: Timestamp;
}

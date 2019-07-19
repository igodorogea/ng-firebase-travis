import { CREATE, DETAIL, EDIT } from '../shared/routing/routes.util';

export function shipmentRoutes(path) {
  return {
    LIST: path,
    DETAIL: `${path}/${DETAIL}`,
    CREATE: `${path}/${CREATE}`,
    EDIT: `${path}/${EDIT}`
  };
}

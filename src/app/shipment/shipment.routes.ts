import { CREATE, DETAIL, EDIT } from '../shared/routes.util';

export const shipmentRoutes = path => ({
  LIST: path,
  DETAIL: `${path}/${DETAIL}`,
  CREATE: `${path}/${CREATE}`,
  EDIT: `${path}/${EDIT}`
});

import { ActivatedRoute, Router } from '@angular/router';

export const LIST = '';
export const DETAIL = 'detail';
export const CREATE = 'new';
export const EDIT = 'edit';

export const productRoutes = root => ({
  LIST: root,
  DETAIL: `${root}/${DETAIL}`,
  CREATE: `${root}/${CREATE}`,
  EDIT: `${root}/${EDIT}`
});

export function buildCrudRoutes(router: Router, route: ActivatedRoute) {
  const url = router.routerState.snapshot.url; // /product/detail/VCoD2IK9MCVQdevKD35N
  const activeSegment = route.snapshot.url.join('/'); // detail/VCoD2IK9MCVQdevKD35N
  const root = activeSegment ? url.replace(`/${activeSegment}`, '') : url; // /product
  return {
    LIST: root,
    DETAIL: `${root}/${DETAIL}`,
    CREATE: `${root}/${CREATE}`,
    EDIT: `${root}/${EDIT}`
  };
}

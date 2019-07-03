import { Routes } from '@angular/router';
import { LIST } from '../shared/routes.util';
import { UsersComponent } from './users.component';

export const USERS_ROUTES_CONFIG: Routes = [
  { path: LIST, component: UsersComponent },
];

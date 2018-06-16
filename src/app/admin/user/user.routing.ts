import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { Routes } from '@angular/router';

export const UserRoutes: Routes = [
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: 'detail',
    component: UserDetailComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  }
];

import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { Routes } from '@angular/router';

export const UserRoutes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'create',
    component: UserDetailComponent
  },
  {
    path: 'edit/:id',
    component: UserDetailComponent
  }
];

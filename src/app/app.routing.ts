import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin/user/list',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

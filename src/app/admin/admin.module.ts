import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: []
})
export class AdminModule { }

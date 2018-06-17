import { UserRoutes } from '@admin/user/user.routing';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { TreeTableModule } from 'primeng/treetable';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(UserRoutes),
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    TreeTableModule
  ],
  declarations: [UserListComponent, UserDetailComponent]
})
export class UserModule {}

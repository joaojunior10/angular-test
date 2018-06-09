import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListRoutes } from './list.routing';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ListRoutes)],
  declarations: [ListComponent]
})
export class ListModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormRoutes } from './form.routing';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(FormRoutes)],
  declarations: [FormComponent]
})
export class FormModule {}

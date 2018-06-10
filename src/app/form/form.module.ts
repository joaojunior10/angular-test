import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from './../shared/shared.module';
import { FormRoutes } from './form.routing';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  imports: [
    SharedModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    RouterModule.forChild(FormRoutes)
  ],
  declarations: [FormComponent]
})
export class FormModule {}

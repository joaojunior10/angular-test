import { BasePage } from './base-page';
import { FormGroup, FormBuilder } from '@angular/forms';

export class BaseForm extends BasePage {
  form: FormGroup;

  constructor(protected formBuilder: FormBuilder) {
    super();
  }

  getError(name) {
    const formControl = this.form.get(name);
    if (
      formControl &&
      formControl.invalid &&
      (formControl.dirty || formControl.touched)
    ) {
      return formControl.errors.invalid;
    }
    return null;
  }
}

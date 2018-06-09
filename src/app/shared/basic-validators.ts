import { FormControl } from '@angular/forms';

export class BasicValidators {
  static required(control: FormControl): any {
    if (control.value == null) {
      return { invalid: 'Campo obrigatório' };
    }
    if (control.value.length === 0) {
      return { invalid: 'Campo obrigatório' };
    }
    return null;
  }
}

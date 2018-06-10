import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class BasicValidators {
  static required(control: FormControl): { [key: string]: string } | null {
    if (control.value == null) {
      return { invalid: 'Campo obrigatório' };
    }
    if (control.value.length === 0) {
      return { invalid: 'Campo obrigatório' };
    }
    return null;
  }
}

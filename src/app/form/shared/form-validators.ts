import { Gender } from './gender.enum';
import { FormControl } from '@angular/forms';

export class FormValidators {
  static gender(control: FormControl): { [key: string]: string } | null {
    if (!control.value) {
      return null;
    }
    if (control.value === Gender.Male || control.value === Gender.Female) {
      return null;
    }
    return {invalid: 'Invalid Gender.'};
  }
}

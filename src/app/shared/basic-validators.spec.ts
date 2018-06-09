import { BasicValidators } from './basic-validators';
import { FormControl } from '@angular/forms';
describe('BasicValidators', () => {

  it('required should return null if the control is not empty', () => {
    const control = new FormControl('teste');
    const required = BasicValidators.required(control);
    expect(required).toBeNull();
  });

  it('required should return null if the control is false', () => {
    const control = new FormControl(false);
    const required = BasicValidators.required(control);
    expect(required).toBeNull();
  });

  it('required should return null if the control is 0', () => {
    const control = new FormControl(0);
    const required = BasicValidators.required(control);
    expect(required).toBeNull();
  });

  it('required should return invalid if the control is null', () => {
    const control = new FormControl(null);
    const required = BasicValidators.required(control);
    expect(required).toEqual({invalid: 'Campo obrigatório'});
  });

  it('required should return invalid if the control is empty', () => {
    const control = new FormControl('');
    const required = BasicValidators.required(control);
    expect(required).toEqual({invalid: 'Campo obrigatório'});
  });
});

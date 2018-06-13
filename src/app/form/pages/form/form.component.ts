import { Gender } from './../../shared/gender.enum';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasicValidators } from './../../../shared/basic-validators';
import { FormService } from './../../service/form.service';
import { Router } from '@angular/router';
import { FormValidators } from '../../shared/form-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  genders = [
    { label: 'Male', value: Gender.Male },
    { label: 'Female', value: Gender.Female }
  ];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.setForm();
  }

  save() {
    if (this.form.valid) {
      const person = this.form.value;
      this.formService.create(person).subscribe(
        res => {
          console.log(res);
          this.form.setValue(res);
          // this.router.navigate(['/list']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  private setForm() {
    this.form = this.formBuilder.group({
      _id: [null],
      name: [null, BasicValidators.required],
      gender: [
        null,
        Validators.compose([BasicValidators.required, FormValidators.gender])
      ],
      activated: [false, BasicValidators.required]
    });
    this.form = new FormGroup(this.form.controls, { updateOn: 'change' });
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

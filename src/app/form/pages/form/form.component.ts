import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasicValidators } from './../../../shared/basic-validators';
import { FormService } from './../../service/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormService]
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.setForm();
  }

  save() {
    console.log(this.form.value);
    this.formService.save().subscribe(
      res => {
        this.router.navigate(['/list']);
      },
      err => {}
    );
  }

  private setForm() {
    this.form = this.formBuilder.group({
      name: [null, BasicValidators.required]
    });
  }
}

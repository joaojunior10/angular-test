import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicValidators } from '@shared/basic-validators';
import { UserValidators } from '../../shared/user-validators';
import { UserService } from './../../services/user.service';
import { Gender } from './../../shared/gender.enum';
import { BaseForm } from '@shared/base-form';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent extends BaseForm implements OnInit {
  genders = [
    { label: 'Male', value: Gender.Male },
    { label: 'Female', value: Gender.Female }
  ];
  constructor(
    protected formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    super(formBuilder);
  }

  ngOnInit() {
    this.setForm();
  }

  save() {
    if (this.form.valid) {
      const user = this.form.value;
      if (user._id) {
      } else {
        this.create(user);
      }
    }
  }

  private create(user: any) {
    this.userService.create(user).subscribe(res => {
      console.log(res);
      this.router.navigate(['../']);
    }, err => {
      console.log(err);
    });
  }

  private setForm() {
    this.form = this.formBuilder.group({
      _id: [null],
      name: [null, BasicValidators.required],
      gender: [
        null,
        Validators.compose([BasicValidators.required, UserValidators.gender])
      ],
      activated: [false, BasicValidators.required]
    });
    this.form = new FormGroup(this.form.controls, { updateOn: 'change' });
  }
}

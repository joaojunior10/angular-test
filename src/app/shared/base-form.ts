import { FormBuilder, FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BasePage } from './base-page';
import { AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ErrorComponent } from '@shared/error/error.component';

export class BaseForm extends BasePage implements AfterViewInit {
  form: FormGroup;
  @ViewChildren(ErrorComponent) errors: QueryList<ErrorComponent>;

  constructor(protected formBuilder: FormBuilder) {
    super();
  }

  ngAfterViewInit() {
    if (this.errors) {
      this.errors.forEach(error => error.form = this.form);
    }
  }
}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormService } from './../../service/form.service';
import { Gender } from './../../shared/gender.enum';
import { FormComponent } from './form.component';
import { createSpyObj } from '../../../testing/util';
import { of } from 'rxjs/observable/of';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const formService = createSpyObj(FormService, ['create']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder, { provide: FormService, useValue: formService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('name should be required', () => {
    const name = component.form.get('name');
    name.setValue(null);
    expect(name.invalid).toBeTruthy();
    name.setValue('');
    expect(name.invalid).toBeTruthy();
    name.setValue('João Gonçalves');
    expect(name.valid).toBeTruthy();
  });

  it('gender should be required', () => {
    const gender = component.form.get('gender');
    gender.setValue(null);
    expect(gender.invalid).toBeTruthy();
    gender.setValue(Gender.Female);
    expect(gender.valid).toBeTruthy();
  });

  it('gender should be of enum Gender', () => {
    const gender = component.form.get('gender');
    gender.setValue(Gender.Female);
    expect(gender.valid).toBeTruthy();
    gender.setValue(Gender.Male);
    expect(gender.valid).toBeTruthy();
    gender.setValue('X');
    expect(gender.invalid).toBeTruthy();
  });

  it('activated should be required', () => {
    const activated = component.form.get('activated');
    activated.setValue(null);
    expect(activated.invalid).toBeTruthy();
    activated.setValue(false);
    expect(activated.valid).toBeTruthy();
    activated.setValue(true);
    expect(activated.valid).toBeTruthy();
  });

  it('should create the from', () => {
    const form = component.form;
    form.patchValue({
      name: 'João Gonçalves',
      gender: Gender.Male,
      activated: true
    });
    expect(form.valid).toBeTruthy();
    expect(form.value).toEqual({
      _id: null,
      name: 'João Gonçalves',
      gender: Gender.Male,
      activated: true
    });
    formService.create.mockImplementation(() => {
      console.log('mock biatch');
      return of({
        _id: 1,
        name: 'João Gonçalves',
        gender: Gender.Male,
        activated: true
      });
    });

    component.save();
    expect(formService.create).toBeCalled();
    expect(form.value._id).toEqual(1);
  });
});

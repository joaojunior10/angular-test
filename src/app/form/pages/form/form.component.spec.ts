import { Gender } from './../../shared/gender.enum';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder]
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
    name.setValue('name');
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
});

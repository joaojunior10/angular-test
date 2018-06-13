import { TestBed, inject } from '@angular/core/testing';

import { FormService } from './form.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FormService]
    });
  });

  it('should be created', inject([FormService], (service: FormService) => {
    expect(service).toBeTruthy();
  }));
});

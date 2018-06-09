import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class FormService {
  save() {
    return of({});
  }

  constructor() {}
}

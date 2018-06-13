import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {
  baseUrl;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl + 'person/';
  }

  get(personId) {
    return this.http.get(this.baseUrl + personId);
  }

  list() {
    return this.http.get(this.baseUrl);
  }

  create(person) {
    console.log('teste');
    return this.http.post(this.baseUrl, person);
  }

  update(personId, person) {
    return this.http.put(this.baseUrl + personId, person);
  }

  delete(personId) {
    return this.http.delete(this.baseUrl + personId);
  }
}

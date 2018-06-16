import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class UserService {
  private readonly baseUrl = environment.baseUrl + 'user/';
  constructor(private http: HttpClient) {}

  get(id) {
    return this.http.get(this.baseUrl + id);
  }

  list() {
    return this.http.get(this.baseUrl);
  }

  create(user) {
    return this.http.post(this.baseUrl, user);
  }

  update(id, user) {
    return this.http.put(this.baseUrl + id, user);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + id);
  }
}

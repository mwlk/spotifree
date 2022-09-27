import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  loginUser(credentials) {
    return new Promise((accept, reject) => {
      if (credentials.password === '12345') {
        accept('login success');
      } else {
        reject('incorrect password');
      }
    });
  }
}

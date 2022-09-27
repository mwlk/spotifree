/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _storage: Storage) {
    this._storage.create();
  }

  loginUser(credentials) {
    return new Promise(async (accept, reject) => {
      const user = await this._storage.get('user');
      if (user.email !== credentials.email) {
        reject(`email not valid ${credentials.email}`);
      } else {
        const password = btoa(credentials.password);
        if (user.password !== password) {
          reject(`password not match`);
        } else {
          accept(`login success`);
        }
      }
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this._storage.set('user', userData).catch(() => {
      this._storage.set('user', null);
    });
  }

  logout() {
    this._storage.clear();
  }
}

/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private _router: Router, private _storage: Storage) {
    this._storage.create();
  }

  async canActivate() {
    const isUserLoggedIn = await this._storage.get('isUserLoggedIn');
    console.log(isUserLoggedIn);
    if (isUserLoggedIn) {
      return true;
    } else {
      this._router.navigateByUrl('/login');
    }
  }
}

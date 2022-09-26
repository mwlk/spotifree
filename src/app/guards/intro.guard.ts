/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class IntroGuard implements CanActivate {
  constructor(private _router: Router, private _storage: Storage) {
    this._storage.create();
  }

  async canActivate() {
    const skipTutorial = await this._storage.get('isIntroShowed');
    console.log(skipTutorial);
    if (skipTutorial) {
      return true;
    } else {
      this._router.navigateByUrl('/intro');
    }
  }
}

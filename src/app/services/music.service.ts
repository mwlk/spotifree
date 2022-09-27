/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private _http: HttpClient) {}

  getNewReleases() {
    return this._http.get(
      'https://platzi-music-api.herokuapp.com/browse/new-releases'
    );
  }
}

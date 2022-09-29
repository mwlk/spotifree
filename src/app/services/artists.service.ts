/* eslint-disable no-underscore-dangle */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as DataArtists from './artists.json';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private apiUrl = 'https://platzi-music-api.herokuapp.com';
  constructor(private _http: HttpClient) {}

  getArtists() {
    return DataArtists;
  }

  getTrackByArtist(artistId) {
    return this._http.get(`${this.apiUrl}/artists/${artistId}/top-tracks?country=CO`);
  }
}

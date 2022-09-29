/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Storage } from '@ionic/storage-angular';
import { UserPhoto } from '../interfaces/photo';
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  public photos: UserPhoto[] = [];
  public profilePicture: UserPhoto;
  constructor(private _storage: Storage) {
    this._storage.create();
  }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    // this.photos.unshift({
    //   filepath: 'soon...',
    //   webviewPath: capturedPhoto.webPath,
    // });

    this.profilePicture = {
      filepath: 'soon ...',
      webviewPath: capturedPhoto.webPath,
    };
    this._storage.set('profile', this.profilePicture);
  }
}

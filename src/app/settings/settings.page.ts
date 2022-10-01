/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { UserPhoto } from '../interfaces/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  userImage = 'assets/icon/favicon.png';
  photo: UserPhoto;
  user: any;

  constructor(public _photoSvc: PhotoService, private _storage: Storage) {
    this._storage.create();
  }
  ngOnInit(): void {
    if (this._storage.get('user')) {
      this._storage.get('user').then((res) => {
        this.user = res;
      });
    }

    if (this._storage.get('profile')) {
      this._storage.get('profile').then((res) => {
        this.photo = res;
        console.log(this.photo);
      });
    }
  }

  takePhoto() {
    this._photoSvc
      .addNewToGallery()
      .then(() => {
        this.getStoragePhoto();
      })
      .catch(() => alert(`an errror`));
  }

  getStoragePhoto() {
    this._storage
      .get('profile')
      .then((res) => {
        console.log(res);
        this.photo = res;
      })
      .catch(() => {
        alert(`cant read picture`);
      });
  }
}

/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination } from 'swiper';
import { MusicService } from '../services/music.service';
import { ViewDidEnter } from '@ionic/angular';

SwiperCore.use([Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomePage implements ViewDidEnter {
  slideOpts: SwiperOptions = {
    initialSlide: 2,
    slidesPerView: 3,
    pagination: true,
    centeredSlides: true,
    speed: 400,
    loop: true,
  };
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];
  constructor(private _musicSvc: MusicService) {}
  ionViewDidEnter(): void {
    this._musicSvc.getNewReleases().subscribe((res: any) => {
      this.artists = res.albums.items;

      this.songs = this.artists.filter((e) => e.album_type === 'single');
      this.albums = this.artists.filter((e) => e.album_type === 'album');
      console.log(this.albums);
    });
  }
}

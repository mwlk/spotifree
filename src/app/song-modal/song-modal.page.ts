/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { ModalController, NavParams, ViewDidEnter } from '@ionic/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);
@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements ViewDidEnter {
  slideOpts: SwiperOptions = {
    initialSlide: 2,
    slidesPerView: 3,
    pagination: true,
    centeredSlides: true,
    speed: 400,
    loop: true,
    autoplay: { delay: 2000 },
  };
  songs!: any[];
  artist!: string;
  constructor(
    private navParams: NavParams,
    private _modalCtl: ModalController
  ) {}
  ionViewDidEnter(): void {
    this.songs = this.navParams.data.songs;
    this.artist = this.navParams.data.artist;

    console.log(this.songs);
    console.log(this.artist);
  }

  async selectSong(song) {
    await this._modalCtl.dismiss(song);
  }
}

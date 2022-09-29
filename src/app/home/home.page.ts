/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { MusicService } from '../services/music.service';
import { ModalController, ViewDidEnter } from '@ionic/angular';
import { ArtistsService } from '../services/artists.service';
import { SongModalPage } from '../song-modal/song-modal.page';

SwiperCore.use([Pagination, Autoplay]);
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
    autoplay: { delay: 2000 },
  };
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];

  tracks: any[] = [];
  song = {
    playing: false,
    name: ''
  };
  constructor(
    private _musicSvc: MusicService,
    private _artistSvc: ArtistsService,
    private _modalCtl: ModalController
  ) {}
  ionViewDidEnter(): void {
    this._musicSvc.getNewReleases().subscribe((res: any) => {
      const items = res.albums.items;

      this.songs = items.filter((e) => e.album_type === 'single');
      this.albums = items.filter((e) => e.album_type === 'album');
    });

    this.artists = this._artistSvc.getArtists().items;
    // console.log(this.artists);
  }

  async showSongs(artist) {
    this._artistSvc.getTrackByArtist(artist.id).subscribe(async (res: any) => {
      this.tracks = res.tracks;

      const modal = await this._modalCtl.create({
        component: SongModalPage,
        componentProps: {
          songs: this.tracks,
          artist: artist.name,
        },
      });
      modal.onDidDismiss().then((dataReturned) => {
        this.song = dataReturned.data;
      });

      return await modal.present();
    });
  }
}

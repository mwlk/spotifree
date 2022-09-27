/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Slide } from '../interfaces/slide';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
export class IntroductionPage implements OnInit {
  slides: Slide[] = [];
  constructor(private _router: Router, private _storage: Storage) {}

  ngOnInit() {
    this.slides = [
      {
        title: 'titulo',
        description: 'descripcion',
        icon: 'play',
        subtitle: 'un subtitulo',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu8qBQibRbXn_5--fk1gOwrscWgOYrG9Gp23ctrrYw=s900-c-k-c0x00ffffff-no-rj',
      },
      {
        title: 'titulo',
        description: 'descripcion',
        icon: 'play',
        subtitle: 'un subtitulo',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu8qBQibRbXn_5--fk1gOwrscWgOYrG9Gp23ctrrYw=s900-c-k-c0x00ffffff-no-rj',
      },
      {
        title: 'titulo',
        description: 'descripcion',
        icon: 'play',
        subtitle: 'un subtitulo',
        image:
          'https://yt3.ggpht.com/ytc/AMLnZu8qBQibRbXn_5--fk1gOwrscWgOYrG9Gp23ctrrYw=s900-c-k-c0x00ffffff-no-rj',
      },
    ];

    this._storage.create();
  }

  finish() {
    this._storage.set('isIntroShowed', true);
    this._router.navigateByUrl('/menu');
  }
}

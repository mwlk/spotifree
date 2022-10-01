import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { ViewDidEnter } from '@ionic/angular';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements ViewDidEnter {
  currentCenter: any;
  coordinates: google.maps.LatLngLiteral[] = [];
  defaultZoom = 18;
  center: any;

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
    clickableIcons: false,
  };

  constructor() {}
  ionViewDidEnter(): void {
    this.getCurrentPosition();
    this.watchPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
  }

  watchPosition() {
    Geolocation.watchPosition({}, (pos) => {
      this.center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      this.coordinates.push({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  }
}

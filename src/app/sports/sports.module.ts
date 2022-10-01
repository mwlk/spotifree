import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { IonicModule } from '@ionic/angular';

import { SportsPageRoutingModule } from './sports-routing.module';

import { SportsPage } from './sports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsPageRoutingModule,
    GoogleMapsModule,
  ],
  declarations: [SportsPage],
})
export class SportsPageModule {}

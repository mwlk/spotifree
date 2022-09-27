/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(private menu: MenuController, private _router: Router) {}

  ngOnInit() {
    console.log(`menu`);
  }

  closeMenu() {
    this.menu.close();
  }

  goHome() {
    this._router.navigateByUrl('/menu/home');
    this.menu.close();
  }
}

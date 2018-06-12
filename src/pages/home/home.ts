import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  params = {
    title: 'Inicio',
    menu: true
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private authProvider: AuthProvider
  ) {
  }
  async ionViewCanEnter() {
    try {
      await this.authProvider.authenticated();
      return true;
    } catch (error) {
      return false;
    }
  }
  ionViewDidLoad() {
  }

}

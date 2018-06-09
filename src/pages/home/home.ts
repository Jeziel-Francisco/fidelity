import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

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
    private userProvider: UserProvider
  ) {
  }
  async ionViewCanEnter() {
    try {
      await this.userProvider.authenticated();
      return true;
    } catch (error) {
      return false;
    }
  }
  ionViewDidLoad() {
  }

}

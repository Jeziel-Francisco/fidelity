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
    title: 'Inicio'
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private userProvider: UserProvider
  ) {
  }
  ionViewCanEnter(): boolean {
    return true;
  }
  ionViewDidLoad() {
    this.userProvider.authenticated().then((user) => console.log(user));
  }

}

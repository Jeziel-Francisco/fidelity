import { Component } from '@angular/core';

import { UserProvider } from '../../providers/user/user';
import { App, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  nav: NavController;

  constructor(
    private app: App,
    private userProvider: UserProvider,
  ) {
    this.nav = this.app.getActiveNav();
  }

  async ionViewDidLoad() {
    try {
      await this.userProvider.authenticated();
    } catch (error) {
      this.nav.setRoot('SigninPage');
    }
  }
}

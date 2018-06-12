import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';

import { App, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  nav: NavController;

  constructor(
    private app: App,
    private authProvider: AuthProvider,
  ) {
    this.nav = this.app.getActiveNav();
  }

  async ionViewDidLoad() {
    try {
      await this.authProvider.authenticated();
    } catch (error) {
      this.nav.setRoot('SigninPage');
    }
  }
}

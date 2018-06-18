import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';

import { App, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'ExplorePage'
  nav: NavController;

  constructor(
    private app: App,
    private authProvider: AuthProvider,
  ) {
    this.nav = this.app.getActiveNavs()[0];
  }

  async ionViewDidLoad() {
    try {
      await this.authProvider.authenticated();
    } catch (error) {
      this.nav.setRoot('SigninPage');
    }
  }
}

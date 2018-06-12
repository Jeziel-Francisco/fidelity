import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { User } from 'firebase';
import { AuthProvider } from './../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild(Nav) nav: Nav;

  currentUser: User;
  pages: any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private authProvider: AuthProvider
  ) {
    this.authProvider.authenticated()
      .then(() => {
        this.currentUser = this.authProvider.getCurrentUser();
      })
      .catch((isAuthenticate: boolean) => this.nav.setRoot('SigninPage'));

    this.pages = [
      { title: 'Perfil', component: 'ProfilePage' },
      { title: 'Configurações', component: 'SettingsPage' }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  onPage(page): void {
    this.nav.push(page.component);
  }

  async logout() {
    try {
      await this.authProvider.logout();
      this.nav.setRoot('SigninPage');
    } catch (error) {
      console.log(error);
      this.nav.setRoot('SigninPage');
    }
  }
}

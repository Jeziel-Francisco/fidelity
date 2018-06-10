import { Component, Input } from '@angular/core';
import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  @Input() params: any = {
    title: '',
    menu: false
  };

  nav: NavController;

  constructor(
    private app: App
  ) {
    this.nav = this.app.getActiveNav();
  }

}

import { Component, Input } from '@angular/core';
import { App, NavController } from 'ionic-angular';

@Component({
  selector: 'header-title',
  templateUrl: 'header-title.html'
})
export class HeaderTitleComponent {

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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  params: {
    title: 'Configurações',
    menu: true
  }

  constructor() {
  }

  ionViewDidLoad() {
  }

}

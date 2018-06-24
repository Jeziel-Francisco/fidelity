import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage'

declare var google;

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  @ViewChild('map') mapRef: ElementRef;

  params = { title: 'Explorar', menu: true }

  map: any;

  constructor(
    private plt: Platform,
    private geolocation: Geolocation,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.plt.ready().then(() => {
      this.geolocation
        .getCurrentPosition()
        .then(pos => {
          console.log(this.mapRef);
          /* this.map = new google.maps.Map(this.mapRef, {
            options: { lat: pos.coords.latitude, lng: pos.coords.longitude },
            zoom: 8
          }); */

        });

    });
  }

  findMap() {
  }
}
// npm install --save @ionic-native/google-maps
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GoogleMapsEvent,
  Marker
} from '@ionic-native/google-maps'

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {
  params = { title: 'Explorar', menu: true }

  map: GoogleMap;

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

          let mapOptios: GoogleMapOptions = {
            camera: {
              target: {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
              },
              zoom: 18,
              tilt: 30
            }
          };

          this.map = GoogleMaps.create('map_canvas');
          // let marker: Marker = this.map.addMarkerSync({
          //   title: 'Ionic',
          //   icon: 'blue',
          //   animation: 'DROP',
          //   position: {
          //     lat: 43.0741904,
          //     lng: -89.3809802
          //   }
          // });
          // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          //   alert('clicked');
          // });
        });

    });
  }

  findMap() {
    this.storage.get('map')
      .then(map => {
      })
      .catch(error => console.log(error));
  }
}
// npm install --save @ionic-native/google-maps
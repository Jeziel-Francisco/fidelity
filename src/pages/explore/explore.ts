import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';


declare var google;

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  @ViewChild('map') mapElemet: ElementRef;
  map: any;

  params = { title: 'Explorar', menu: true }

  constructor(
    private geolocation: Geolocation,
    private plt: Platform,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    this.plt.ready().then(() => {
      let mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullScreenControl: false
      };

      this.map = new google.maps.Map(this.mapElemet.nativeElement, mapOptions);

      this.geolocation.getCurrentPosition().then((pos) => {
        let lating = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(lating);
        this.map.setZoom(15);
        this.map = new google.maps.Marker({
          position: { lat: pos.coords.latitude, lng: pos.coords.longitude },
          zoom: 15,
          map: this.map
        });
        this.storage.set('map', JSON.stringify(this.map)).then(map => console.log(map)).catch(error => console.log(error));
      });
    });
  }

  findMap() {
    this.storage.get('map')
      .then(map => {
        this.map = map;
        console.log(map);
      })
      .catch(error => console.log(error));
  }
}

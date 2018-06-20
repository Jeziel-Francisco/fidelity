import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMaps } from '@ionic-native/google-maps';

import { IonicStorageModule } from '@ionic/storage';

import { ComponentsModule } from '../../components/components.module';

import { ExplorePage } from './explore';

@NgModule({
  declarations: [
    ExplorePage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorePage),
    ComponentsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    Geolocation,
    GoogleMaps
  ],
  exports: [
    ExplorePage
  ]
})
export class ExplorePageModule { }

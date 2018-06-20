import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';

import { ComponentsModule } from '../../components/components.module';

import { AuthProvider } from '../../providers/auth/auth';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers: [
    AuthProvider
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }

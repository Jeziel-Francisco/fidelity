import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { ProfilePage } from './profile';

import { ComponentsModule } from '../../components/components.module';

import { AuthProvider } from '../../providers/auth/auth';

import { UserProvider } from '../../providers/user/user';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ComponentsModule
  ],
  providers: [
    AuthProvider,
    UserProvider
  ],
  exports: [
    ProfilePage
  ]
})
export class ProfilePageModule { }

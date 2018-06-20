import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SigninPage } from './signin';

import { AuthProvider } from '../../providers/auth/auth';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
  providers: [
    AuthProvider
  ],
  exports: [
    SigninPage
  ]
})
export class SigninPageModule { }

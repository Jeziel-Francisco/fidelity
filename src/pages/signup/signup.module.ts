import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SignupPage } from './signup';

import { AuthProvider } from '../../providers/auth/auth';

import { UserProvider } from '../../providers/user/user';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  providers: [
    AuthProvider,
    UserProvider
  ]
})
export class SignupPageModule { }

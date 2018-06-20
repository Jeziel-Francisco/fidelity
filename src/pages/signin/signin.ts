import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUser } from '../../models/user.interface';

import { AuthProvider } from '../../providers/auth/auth';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authProvider: AuthProvider
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signinForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  async onSubmit() {
    let user: IUser = this.signinForm.value;

    try {
      await this.authProvider.signin(user);
      this.navCtrl.setRoot(TabsPage);
    } catch (error) {
      console.log(error);
    }
  }

  signup(): void {
    this.navCtrl.push('SignupPage');
  }

  async forget() {
    if (this.signinForm.value.email.length > 1) {
      await this.authProvider.forgetPassword(this.signinForm.value.email);
    } else {
      alert('peencha o email!');
    }
  }
}

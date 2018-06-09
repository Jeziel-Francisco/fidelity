import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUser } from '../../models/user.interface';

import { UserProvider } from '../../providers/user/user';

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
    private navParams: NavParams,
    private userProvider: UserProvider
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
      await this.userProvider.signin(user);
      this.navCtrl.setRoot(TabsPage);
    } catch (error) {
      console.log(error);
    }
  }

  signup(): void {
    this.navCtrl.push('SignupPage');
  }
}

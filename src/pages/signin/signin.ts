import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IUser } from '../../models/user.interface';

import { UserProvider } from '../../providers/user/user';


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

  onSubmit(): void {
    let user: IUser = this.signinForm.value;

    try {
      this.userProvider.signin(user);
      this.navCtrl.setRoot('HomePage'); 
    } catch (error) {
      
    }
  }

  signup(): void {
    this.navCtrl.push('SignupPage');
  }
}

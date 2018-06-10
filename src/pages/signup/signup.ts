import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUser } from '../../models/user.interface';

import { UserProvider } from '../../providers/user/user';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private navParams: NavParams,
    private userProvider: UserProvider
  ) {
    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.signupForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      federalId: ['', Validators.compose([Validators.required, Validators.minLength(11), Validators.maxLength(11)])],
      phone: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    let user: IUser = this.signupForm.value;
    try {
      let auth = await this.userProvider.createAuth(user)
      user.uid = auth.user.uid;
      await this.userProvider.create(user);
      this.navCtrl.setRoot(TabsPage);
    } catch (error) {
      console.log(error);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'firebase';

import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
import { IUser } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

  currentUser: User;
  params: { title: string, menu: boolean } = { title: 'Perfil Usuario', menu: false };
  profileForm: FormGroup;
  status: boolean;
  user: IUser;
  private filePhoto: File;

  constructor(
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private navParams: NavParams,
    private userProvider: UserProvider
  ) {

    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      phone: ['', Validators.compose([Validators.required])],
    });
  }

  ionViewDidLoad() { }

  onSubmit() {
    let uploadTask = this.userProvider.uploadPhoto(this.filePhoto, this.currentUser.uid);

    uploadTask.then((ok) => console.log(ok));
  }

  ngOnInit() {
    this.status = false;
    this.currentUser = this.authProvider.getCurrentUser();
  }

  edit() {
    this.status = !this.status;
  }

  updatedPhoto() {
    console.log('Alterar Foto');
  }

  onPhoto(file): void {
    this.filePhoto = file.target.files[0];
  }

}

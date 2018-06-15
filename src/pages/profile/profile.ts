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
  uploadProgress: number;

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

  ionViewDidLoad() {
    this.userProvider.findById(this.currentUser.uid).first().subscribe((user: IUser) => {
      this.profileForm.setValue({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        username: user.username || '',
        phone: user.phone || ''
      });
      this.user = user;
    }, (error) => console.log(error));
  }

  onSubmit() {
    let upload = this.userProvider.uploadPhoto(this.filePhoto, this.currentUser.uid);
    upload.then((snapshot) => {

      this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

      snapshot.ref.getDownloadURL().then(value => {
        this.currentUser.updateProfile({
          displayName: this.profileForm.value.username,
          photoURL: value
        }).then((log) => {
          this.userProvider
            .update(this.profileForm.value, this.user.uid)
            .then(() => this.status = !this.status);
        });
        this.uploadProgress = 0;
      });
    });
  }

  ngOnInit() {
    this.status = false;
    this.currentUser = this.authProvider.getCurrentUser();
  }

  editProfile() {
    this.status = !this.status;
  }


  onPhoto(file): void {
    this.filePhoto = file.target.files[0];
  }

}

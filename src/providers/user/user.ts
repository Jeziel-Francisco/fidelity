import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IUser } from '../../models/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

@Injectable()
export class UserProvider {

  constructor(
    private afauth: AngularFireAuth,
    private afdatabase: AngularFireDatabase
  ) { }


  async create(user: IUser) {
    delete user.password;
    return await this.afdatabase.list(`/users`).set(user.uid, user);
  }

  createAuth(user: IUser): Promise<any> {
    return this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  async signin(user: IUser) {
    return await this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  async logout(): Promise<any> {
    return await this.afauth.auth.signOut();
  }

  authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) =>
      this.afauth
        .authState
        .first()
        .subscribe(
          (user) => (user !== null) ? resolve(true) : reject(false),
          (error) => reject(false)));

  }

  updatePassword(){
    let user:firebase.User = this.afauth.auth.currentUser;
    this.afauth.auth.sendPasswordResetEmail(user.email);
  }

}

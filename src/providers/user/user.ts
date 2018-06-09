import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { IUser } from '../../models/user.interface';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserProvider {

  constructor(
    private afauth: AngularFireAuth,
    private afdatabase: AngularFireDatabase
  ) { }


  async create(user: IUser) {
    delete user.password;
    return await this.afdatabase.list(`/users`).set(user._id, user);
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

  authenticated() {
    return this.afauth.auth.sendPasswordResetEmail('jeziel.franciscodasilva@gmail.com');
  }

}

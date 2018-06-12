import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

import { IUser } from '../../models/user.interface';

@Injectable()
export class AuthProvider {

  constructor(
    private auth: AngularFireAuth
  ) { }

  authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) =>
      this.auth
        .authState
        .first()
        .subscribe(
          (user) => (user !== null) ? resolve(true) : reject(false),
          (error) => reject(false)));

  }

  async updatePassword(password: string) { // Alterar Senha 
    let user: User = this.auth.auth.currentUser;
    return await user.updatePassword(password);
  }

  async forgetPassword(email: string) {   // Esqueci minha Senha
    return await this.auth.auth.sendPasswordResetEmail(email);
  }

  createAuth(user: IUser): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  updateAuth(user: IUser, url:string) {
    let currentUser = this.auth.auth.currentUser;
    return currentUser.updateProfile({
      displayName:'',
      photoURL:url
    });
  }

  async signin(user: IUser) {
    let auth = await this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
    return auth;
  }

  async logout(): Promise<any> {
    return await this.auth.auth.signOut();
  }

  getCurrentUser(): User {
    return this.auth.auth.currentUser;
  }

}

import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import 'rxjs/add/operator/map';

import { IUser } from '../../models/user.interface';

@Injectable()
export class UserProvider {

  constructor(
    private database: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { }


  async create(user: IUser) {
    delete user.password;
    return await this.database.list(`/users`).set(user.uid, user);
  }

  uploadPhoto(file: File, userId: string) {
    return this.storage
      .ref(`/users/${userId}`)
      .put(file);
  }

  update(user: IUser, uid: string) {
    return this.database.list(`/users`).set(uid, user);
  }

  findById(uid: string) {
    return this.database.object<IUser>(`/users/${uid}`).valueChanges();
  }


}

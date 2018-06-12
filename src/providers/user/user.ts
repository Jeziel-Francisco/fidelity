import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

import 'rxjs/add/operator/map';

import { IUser } from '../../models/user.interface';
import { Observable } from 'rxjs';

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
    let ref = this.storage.ref(`/users/${userId}`);
    return ref.put(file);
  }

  async update(user: IUser, uid: string) {
    this.database.list(`/users`).update(uid, user);
  }

  findById(uid: string): Observable<{}[]> {
    return this.database.list(`/users`, (ref) => ref.orderByChild('uid').equalTo(uid)).valueChanges();
  }


}

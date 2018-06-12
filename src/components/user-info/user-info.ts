import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'firebase';

@Component({
  selector: 'user-info',
  templateUrl: 'user-info.html'
})
export class UserInfoComponent {

  @Input() currentUser: User;
  @Input() isMenu: boolean;
  
  constructor() { }
}

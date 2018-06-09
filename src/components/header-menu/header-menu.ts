import { Component, Input } from '@angular/core';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  @Input() params: any = {
    title: ''
  };

  constructor(
    private userProvider: UserProvider
  ) { }

  logout(): void {
    try {
      this.userProvider.logout();
    } catch (error) {
      console.log(error);
    }
  }

}

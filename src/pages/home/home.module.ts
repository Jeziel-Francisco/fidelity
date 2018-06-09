import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { HeaderMenuComponent } from '../../components/header-menu/header-menu';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HomePage)
  ],
})
export class HomePageModule { }

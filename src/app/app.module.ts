import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CONFIG } from './CONFIG';

import { HomePageModule } from '../pages/home/home.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { SigninPageModule } from '../pages/signin/signin.module';
import { SignupPageModule } from '../pages/signup/signup.module';

import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(CONFIG),
    BrowserModule,
    HomePageModule,
    IonicModule.forRoot(MyApp),
    SettingsPageModule,
    SigninPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider
  ]
})
export class AppModule { }

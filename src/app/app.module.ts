import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { CONFIG } from './CONFIG';

import { HomePageModule } from '../pages/home/home.module';
import { SigninPageModule } from '../pages/signin/signin.module';
import { SignupPageModule } from '../pages/signup/signup.module';

import { UserProvider } from '../providers/user/user';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(CONFIG),
    BrowserModule,
    HomePageModule,
    IonicModule.forRoot(MyApp),
    SigninPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
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

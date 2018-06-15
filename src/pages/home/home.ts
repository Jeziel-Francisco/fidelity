import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';

import { ICompany } from '../../models/company.interface';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {

  companies: any;

  params = {
    title: 'Coleções',
    menu: true
  };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private authProvider: AuthProvider
  ) {
  }
  async ionViewCanEnter() {
    try {
      await this.authProvider.authenticated();
      return true;
    } catch (error) {
      return false;
    }
  }
  ionViewDidLoad() {
  }

  ngOnInit(): void {
    this.companies = [
      {
        uid: 'ABS',
        name: 'Empresa 1',
        fantasy: 'Empresa 1',
        title: 'Titulo 1',
        quantityRequired: 100,
        poits: [
          {
            quantityPurchased: 10,
            date: Date.now
          },
          {
            quantityPurchased: 10,
            date: Date.now
          }
        ]
      },
      {
        uid: 'ABS',
        name: 'Empresa 2',
        fantasy: 'Empresa 2',
        title: 'Titulo 2',
        quantityRequired: 110,
        poits: [
          {
            quantityPurchased: 10,
            date: Date.now
          },
          {
            quantityPurchased: 10,
            date: Date.now
          }
        ]
      },
      {
        uid: 'ABS',
        name: 'Empresa 3',
        fantasy: 'Empresa 3',
        title: 'Titulo 3',
        quantityRequired: 500,
        poits: [
          {
            quantityPurchased: 10,
            date: Date.now
          },
          {
            quantityPurchased: 10,
            date: Date.now
          }
        ]
      },
      {
        uid: 'ABS',
        name: 'Empresa 4',
        fantasy: 'Empresa 4',
        title: 'Titulo 4',
        quantityRequired: 80,
        poits: [
          {
            quantityPurchased: 10,
            date: Date.now
          },
          {
            quantityPurchased: 10,
            date: Date.now
          }
        ]
      },
      {
        uid: 'ABS',
        name: 'Empresa 5',
        fantasy: 'Empresa 5',
        title: 'Titulo 5',
        quantityRequired: 120,
        poits: [
          {
            quantityPurchased: 10,
            date: Date.now
          },
          {
            quantityPurchased: 10,
            date: Date.now
          }
        ]
      }
    ]
  }
}

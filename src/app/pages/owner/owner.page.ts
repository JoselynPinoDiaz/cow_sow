import { Component, OnInit, ViewChild } from '@angular/core';
import { App } from '@capacitor/app';
import {  MenuController, NavParams } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LoginRolesService } from 'src/app/login-roles.service';




/* Importacion de componentes a utilizar */

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {

  username = '';
  pages = [];

  @ViewChild(Nav) nav : NavController;

  constructor( public  navCtrl: NavController, public LoginRolesService : LoginRolesService) { 
  }

  ionViewWillEnter(){
    if(this.LoginRolesService.isAdmin()){
        this.pages = [
          this.nav.navigateRoot('login')

        ];
        this.openPage('AdminPage');
      
    }else {
      this.pages = [
        {title: 'User Dassboard', page : 'UserPage', icon: 'home'}, 
        {title: 'User Second Page', page : 'AdminSecondPage', icon: 'planet'}
      ];
      this.openPage('UserPage');
    }
    this.username = this.LoginRolesService.currentOwner.name;
  }

  openPage(page){
    this.navCtrl.navigateRoot('home');
  }

  logout(){
    this.LoginRolesService.logout();
    this.navCtrl.navigateRoot('/login'); // WRONG
  }

  ionViewCanEnter(){
    return this.LoginRolesService.isLogeedIn();
  }

  ngOnInit() {
  }
}

function Nav(Nav: any) {
  throw new Error('Function not implemented.');

}


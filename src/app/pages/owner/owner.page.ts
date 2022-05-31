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
         
          
          
        ];
        this.openPage('/admin');
      
    }else {
      this.pages = [
        
        
      ];

    }
    this.username = this.LoginRolesService.currentOwner.name;
  }

  openPage(page){
    
    
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


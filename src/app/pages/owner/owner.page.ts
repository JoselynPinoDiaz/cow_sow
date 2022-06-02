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

  constructor( private menu: MenuController, public  navCtrl: NavController, public LoginRolesService : LoginRolesService) { 
  }

<<<<<<< HEAD

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
=======
  
>>>>>>> 993efcc0daceb72ab1b8f34bba97725de4603b2f


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

  logout(){
    this.logout();
    this.navCtrl.navigateRoot('/login'); // WRONG
  }

}


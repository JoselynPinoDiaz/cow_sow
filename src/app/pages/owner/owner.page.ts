import { Component, OnInit } from '@angular/core';
import { MenuController, NavParams } from '@ionic/angular';
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


  constructor( public  navCtrl: NavController, public LoginRolesService : LoginRolesService) { 
  }

  ionViewWillEnter(){
    if(this.LoginRolesService.isAdmin()){
        this.pages = [
              

        ];
      
    }else {

    }
  }

  ngOnInit() {
  }



  

}


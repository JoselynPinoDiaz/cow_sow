import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



/* Importacion de componentes a utilizar */

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {
  navCtrl: any;


  constructor( private menu: MenuController) { }

  ngOnInit() {
  }

  

  

  logout(){
    this.logout();
    this.navCtrl.navigateRoot('/login'); // WRONG
  }

}


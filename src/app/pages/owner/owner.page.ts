import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



/* Importacion de componentes a utilizar */

@Component({
  selector: 'app-owner',
  templateUrl: './owner.page.html',
  styleUrls: ['./owner.page.scss'],
})
export class OwnerPage implements OnInit {



  constructor( private menu: MenuController,
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router) { }

  ngOnInit() {
  }

cerrarSecion(){
  this.router.navigate(['/home'])
}

  

}


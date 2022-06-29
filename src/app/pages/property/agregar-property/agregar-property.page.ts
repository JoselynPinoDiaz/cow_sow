import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-property',
  templateUrl: './agregar-property.page.html',
  styleUrls: ['./agregar-property.page.scss'],
})
export class AgregarPropertyPage implements OnInit {

  constructor(public navCtrl: NavController,
    private routerOutlet: IonRouterOutlet,
    private router: Router) { }

  ngOnInit() {
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  

}

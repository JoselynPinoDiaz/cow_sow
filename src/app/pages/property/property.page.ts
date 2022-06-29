import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

public propiedad = []

  constructor(public Sproperty: PropertyService,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.Sproperty.cargarpropiedad()
    .subscribe( data =>{
      this.propiedad = data
    })
  }

  agregarPropiedad(){
    this.router.navigate(['/agregar-granja'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  


}


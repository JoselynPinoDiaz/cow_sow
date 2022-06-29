import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { SowingService } from './sowing.service';

@Component({
  selector: 'app-sowing',
  templateUrl: './sowing.page.html',
  styleUrls: ['./sowing.page.scss'],
})
export class SowingPage implements OnInit {

  public siembra = []

  constructor(public Ssowing: SowingService,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router) { }

  ngOnInit() { }

  ionViewWillEnter(){
    this.Ssowing.cargarSiembra()
    .subscribe( data =>{
      this.siembra = data
    })
  }

  agregarSiembra(){
    this.router.navigate(['/agregar-siembra'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }

}
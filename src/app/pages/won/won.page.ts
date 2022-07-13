import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { WonService } from './won.service';

@Component({
  selector: 'app-won',
  templateUrl: './won.page.html',
  styleUrls: ['./won.page.scss'],
})
export class WonPage implements OnInit {

  public Ganado = []

  constructor(public SwonService: WonService,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.SwonService.ObtnerGanado()
    .subscribe( data =>{
      this.Ganado = data
    });
  }

  agregarGanado(){
    this.router.navigate(['/agregar-ganado'])
  }


  //*Cerrar Sesion
  cerrarSecion(){
    this.router.navigate(['/home'])
  }

 



}

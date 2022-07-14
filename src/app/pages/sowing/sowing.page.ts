import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
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

  siembras: any;

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

  deleteSiembras(ID_SIEMBRA){
    this.Ssowing.DeleteSiembra(ID_SIEMBRA).subscribe((resultado)=>{
      console.log(resultado);
      this.siembras = resultado;
      
    })
  }








  agregarSiembra(){
    this.router.navigate(['/agregar-siembra'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }





}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { ContactService } from '../contact.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

infoContacto = []

  constructor(private infoServi: ContactService, 
              private router: Router,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              public activate: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {

    this.activate.paramMap.subscribe(p => {
      //redireccionar
      //var ID_CONTACTO = param.get('contactId');
      this.infoServi.infoContactos(p.get('contactId'))
      .subscribe(data => {
        this.infoContacto = data;
    });
  })  
  }

  eliminarContacto(){

  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  

}


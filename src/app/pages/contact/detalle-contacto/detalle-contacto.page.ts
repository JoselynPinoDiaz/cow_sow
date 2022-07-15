import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ContactService } from '../contact.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../../modelos/conatcto.interface';



@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

infoContacto = []


contacto: any = {
  ID_CONTACTO:"",
  NOMBRE: "",
  EMAIL: "",
  TELEFONO: "",
  DESCRIPCION: ""
}

antes:any;

  constructor(private infoServi: ContactService, 
              private router: Router,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              public activate: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.activate.paramMap.subscribe (p => {
      //redireccionar
      //var id= p.get('numero_serie');
     // this.infoGanado = 
      this.infoServi.cargarContactos()
      .subscribe(data => {
        this.infoContacto= data;
        console.log(data)
      })
  })

  this.infoServi.cargarContactos().subscribe((res) => {
    let rut = localStorage.getItem('UsuarioLogueado');
    this.antes = res.filter(function (res) {
      return res.RUT_USUARIO === JSON.parse(rut);
    });
  });

}









  cerrarSecion(){
    this.router.navigate(['/home'])
  }





}


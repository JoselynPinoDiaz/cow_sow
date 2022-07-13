import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ContactService } from '../contact.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

infoContacto: any = []


contacto: any = {
  ID_CONTACTO:"",
  NOMBRE: "",
  EMAIL: "",
  TELEFONO: "",
  DESCRIPCION: ""
}


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
      this.infoServi.ContactosById(p.get('ID_CONTACTO'))
      .subscribe(data => {
        this.infoContacto= data;
        console.log(this.infoContacto)
      })
  })

}





update(){
  this.infoServi.updateContacto(this.contacto.ID_CONTACTO).subscribe(res=>{
  })
}




  cerrarSecion(){
    this.router.navigate(['/home'])
  }





}


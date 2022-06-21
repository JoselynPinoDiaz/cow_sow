import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contacto } from '../../modelos/conatcto.interface';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-agregar-contactos',
  templateUrl: './agregar-contactos.page.html',
  styleUrls: ['./agregar-contactos.page.scss'],
})
export class AgregarContactosPage implements OnInit {


  constructor(private serviContacto: ContactService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit(){}


  agregarNuevoContacto(ID_CONTACTO, NOMBRE, EMAIL, TELEFONO, DESCRIPCION){
    const contacto : Contacto = {     
      ID_CONTACTO: ID_CONTACTO.value,
      NOMBRE: NOMBRE.value,
      EMAIL:EMAIL.value,
      TELEFONO: TELEFONO.value,
      DESCRIPCION: DESCRIPCION.value,
      VISTAS: "0"
    }
    this.serviContacto.agregarContacto(contacto)
    .subscribe(data =>{
     this.router.navigate(['/contact'])
    
    })
  }
  
 
    }





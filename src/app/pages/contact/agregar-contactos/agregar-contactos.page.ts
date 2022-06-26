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
      id: ID_CONTACTO.value,
      nombre: NOMBRE.value,
      email:EMAIL.value,
      telefono: TELEFONO.value,
      descripcion: DESCRIPCION.value
    }
    this.serviContacto.agregarContacto(contacto)
    .subscribe(data =>{
     this.router.navigate(['/contact'])
    
    })
  }
  
 
    }





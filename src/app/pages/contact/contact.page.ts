import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  private contactos = [];


  constructor(public servicioContacto: ContactoService) { 

    async cambiarNombre(){
      const nombrePaises = await this.servicioContacto.cargarPaises();
      this.contactos.setValue(nombrePaises[0].NOMBRE_PAIS);
    
    }
  

  
    

  }

  ngOnInit() {
    console.log(this.contactos)
  }

  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {

  formularioContacto: FormGroup;


  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController , public httpCliente : HttpClient) {

    this.formularioContacto = this.fb.group({

      'nombre': new FormControl("", Validators.required),
      'pApellido': new FormControl("", Validators.required),
      'sApellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'telefono': new FormControl("", Validators.required)

    })

   }

  ngOnInit() {
  }

   async agregar(){
    var c = this.formularioContacto.value;
    

    if(this.formularioContacto.invalid){
      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          subHeader: '',
          message: 'Debe ingresar todo los datos',
          buttons: ['Aceptar']
        });
    
         (await alert).present();
    
        return ;

  }

  var contacto = {
    

    nombre: c.nombre,
    pApellido: c.pApellido,
    sApellido: c.sApellido,
    email: c.email,
    telefono: c.telefono


  }

  localStorage.setItem('Contacto', JSON.stringify(contacto));
  localStorage.setItem('Contacto Registrado','true');
  }

}

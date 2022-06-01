import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ContactPage } from '../contact.page';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.page.html',
  styleUrls: ['./create-contact.page.scss'],
})
export class CreateContactPage implements OnInit {

  formularioContacto: FormGroup;
  cont = ContactPage;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

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

  async guardar(){
    var f = this.formularioContacto.value;


    if(this.formularioContacto.invalid){
      
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Error',
          subHeader: '',
          message: 'Debe ingresar todo los datos',
          buttons: ['Aceptar']
        });
    
        await alert.present();
    
        return ;

  }

  var contacto = {

    nombre: f.nombre,
    pApellido: f.pApellido,
    sApellido: f.sApellido,
    email: f.email,
    telefono: f.telefono


  }

  localStorage.setItem('Contacto', JSON.stringify(contacto));
  localStorage.setItem('ingresado','true');
  }

  onClick(){
    console.log('has hecho click')
  }

}

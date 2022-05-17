import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-sowing',
  templateUrl: './create-sowing.page.html',
  styleUrls: ['./create-sowing.page.scss'],
})
export class CreateSowingPage implements OnInit {

  formularioSiembra: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {
    
    this.formularioSiembra = this.fb.group({

      'tipoSiembra': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'descripcion': new FormControl("", Validators.required)

    })


  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioSiembra.value;


    if(this.formularioSiembra.invalid){
      
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

  var siembra = {

    tipoSiembra: f.tipoSiembra,
    nombre: f.nombre,
    descripcion: f.descripcion

  }

  localStorage.setItem('Siembra', JSON.stringify(siembra));
  
  }

}

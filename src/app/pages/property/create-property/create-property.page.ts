import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.page.html',
  styleUrls: ['./create-property.page.scss'],
})
export class CreatePropertyPage implements OnInit {

  formularioPropiedad: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioPropiedad = this.fb.group({

      'nombre': new FormControl("", Validators.required),
      'tipoProduccion': new FormControl("", Validators.required),
      'pais': new FormControl("", Validators.required),
      'comuna': new FormControl("", Validators.required),
      'region': new FormControl("", Validators.required),
      'hectarias': new FormControl("", Validators.required)

    })


   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioPropiedad.value;

    if(this.formularioPropiedad.invalid){

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

    var propiedad = {

      nombre: f.nombre,
      tipoProduccion: f.tipoProduccion,
      pais: f.pais,
      comuna: f.comuna,
      region: f.region,
      hectarias: f.hectarias   
  
    }
  
    localStorage.setItem('Propiedad', JSON.stringify(propiedad));



  }

}


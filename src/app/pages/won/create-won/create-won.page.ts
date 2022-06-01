import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-won',
  templateUrl: './create-won.page.html',
  styleUrls: ['./create-won.page.scss'],
})
export class CreateWonPage implements OnInit {

  formularioGanado: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) {

    this.formularioGanado = this.fb.group({

      'nombre': new FormControl("", Validators.required),
      'numeroSerie': new FormControl("", Validators.required),
      'tipoGanado': new FormControl("", Validators.required),
      'tipoProduccion': new FormControl("", Validators.required),
      'sexoAnimal': new FormControl("", Validators.required),
      'razaAnimal': new FormControl("", Validators.required)

    })


   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioGanado.value;


    if(this.formularioGanado.invalid){
      
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

  var ganado = {

    nombre: f.nombre,
    numeroSerie: f.numeroSerie,
    tipoGanado: f.tipoGanado,
    tipoProduccion: f.tipoProduccion,
    sexoAnimal: f.sexoAnimal,
    razaAnimal: f.razaAnimal
  }

  localStorage.setItem('Ganado', JSON.stringify(ganado));
  
  }

}

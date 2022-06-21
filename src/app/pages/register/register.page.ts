import { Component, OnInit } from '@angular/core';
//importando librerias
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Registro } from '../modelos/registro.interface';
import { RegisterService } from './register.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  constructor(private regiService: RegisterService,
              public fb: FormBuilder, 
              public alertController: AlertController,
              private router: Router,
              public navCtrl: NavController) { 

  }

  ngOnInit() {
  }


  registrarse(RUT,PNOMBRE,SNOMBRE,PAPELLIDO,SAPELLIDO,EMAIL, TELEFONO, PASSWORD,FECHA_NACIMIENTO,NOMBRE_COMUNA,NOMBRE_REGION,NONBRE_PAIS){
    const registro : Registro = {     
      RUT: RUT.value(Validators.required),
      PNOMBRE: PNOMBRE.value(Validators.required),
      SNOMBRE: SNOMBRE.value(Validators.required),
      PAPELLIDO: PAPELLIDO.value(Validators.required),
      SAPELLIDO:SAPELLIDO.value(Validators.required),
      EMAIL: EMAIL.value(Validators.required),
      PASSWORD:PASSWORD.value(Validators.required),
      TELEFONO: TELEFONO.value(Validators.required),
      FECHA_NACIMIENTO: FECHA_NACIMIENTO.value(Validators.required),
      NOMBRE_COMUNA: NOMBRE_COMUNA.value(Validators.required),
      NOMBRE_REGION: NOMBRE_REGION.value(Validators.required),
      NONBRE_PAIS: NONBRE_PAIS.value(Validators.required),
      VISTAS: "0"
    }
    this.regiService.agregarNuevoUsuario(registro)
    .subscribe(data =>{
     this.router.navigate(['/login'])
     localStorage.setItem('Usuario', JSON.stringify(registro));
    
    })
  }
  

}



import { Component, OnInit } from '@angular/core';
//importando librerias
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, 
            public alertController: AlertController,
            public navCtrl: NavController) { 

    this.formularioRegistro = this.fb.group({

      'nombre': new FormControl("", Validators.required),
      'pApellido': new FormControl("", Validators.required),
      'sApellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'confirmarEmail': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmarPassword': new FormControl("", Validators.required),
      'pais': new FormControl("", Validators.required),
      'comuna': new FormControl("", Validators.required),
      'region': new FormControl("", Validators.required),
      'administrador': new FormControl("", Validators.required)

    })

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
        
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

  var usuario  = {

    nombre: f.nombre,
    pApellido: f.pApellido,
    sApellivo: f.sApellido,
    email: f.email,
    confirmarEmail: f.confirmarEmail,
    password: f.password,
    confirmarPassword: f.confirmarPassword,
    pais: f.pais,
    comuna: f.comuna,
    region: f.region,
    admin: f.administrador

  }

  localStorage.setItem('Usuario', JSON.stringify(usuario));
  localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('login');
  
  }
  

}



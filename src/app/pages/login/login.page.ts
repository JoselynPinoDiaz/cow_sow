import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

//Importando Librerias



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor( public fb: FormBuilder, 
              public alertController: AlertController, 
              public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({

      'email' : new FormControl("", Validators.required),
      'password' : new FormControl("", Validators.required)
    })

  }


  ngOnInit() {
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('Usuario'));

    if(usuario.email == f.email && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('owner');
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos Incorrectos',
        subHeader: '',
        message: 'El email o contraseña Incorrecta',
        buttons: ['Aceptar']
      });
  
      await alert.present();
  
      return ;
    }
  }
  

}



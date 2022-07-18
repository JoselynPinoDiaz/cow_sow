import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {GoogleAuth} from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';




//Importando Librerias



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private Slogin: LoginService,
    private router: Router,
    public alerta: AlertController) {
      this.formularioLogin = this.fb.group({

        'RUT_ADMIN' : new FormControl("", Validators.required),
        'CLAVE' : new FormControl("", Validators.required)
      })
  
    }
    



  ngOnInit() { }


  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('Administrador'));

    if(usuario.RUT_ADMIN == "16028356" && usuario.CLAVE == "ma123"){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('owner');
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Datos Incorrectos',
        subHeader: '',
        message: 'El Email o Contraseña Incorrecta',
        buttons: ['Aceptar']
      });
  
      await alert.present();
  
      return ;
    }
  }

  showPassword = false;

  mostrarContrasena(): void{

    this.showPassword = !this.showPassword;
  }








}











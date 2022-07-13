import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginI } from '../modelos/login.interface';
import { ResponceI } from '../modelos/response.interface';

//Importando Librerias



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor( public fb: FormBuilder, 
              public alertController: AlertController, 
              public navCtrl: NavController,
              private Slogin: LoginService, 
              private router: Router,
              public alerta:AlertController) { }

alert;
usuario: any = {
  ROL_ADMIN: "",
  CLAVE: "",
              }

  ngOnInit() {}

  ingresar(){
    this.Slogin.login(this.usuario.ROL_ADMIN, this.usuario.CLAVE).subscribe((res) =>{
      console.log(res['msg']);
      console.log(res['RUT_USUARIO']);

      if(res['msg']){
        let DataUser:any=res['RUT_USUARIO'];
        this.Slogin.setCurrentUser(DataUser);
        this.router.navigate(['/home'])
        this.usuario.ROL_ADMIN= "admin";
        this.usuario.CLAVE = "admin";
      }else{
        this.error("");
        this.usuario.ROL_ADMIN = "admin";
        this.usuario.CLAVE = "admin";
      }
    })

  }
  async error(mensaje) {
    this.alert = await this.alerta.create({
     cssClass: 'my-custom-class',
     header: 'Ingreso incorrecto',
     subHeader: 'Vuelva a intentarlo',
     message: mensaje,
     buttons: ['Aceptar']
   });
  
   await this.alert.present();
  
  }

  showPassword = false;

  mostrarContrasena(): void{

    this.showPassword = !this.showPassword;
  }
  
  
    
}
  
  
  


  





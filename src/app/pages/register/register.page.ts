import { Component, OnInit } from '@angular/core';
//importando librerias
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  admin: any ={
    ROL_ADMIN:"",   
    RUT_ADMIN:"",
	  PNOMBRE:"",
	  SNOMBRE:"",
	  PAPELLIDO:"",
	  SAPELLIDO:"",
    EMAIL:"",
    CLAVE:"",
	  FECHA_NACIMIENTO:"",
    ID_PROPIEDAD:""

  }
  public paises = [];
  public region = [];
  public comuna = [];
  alert;

  usuario: []

  constructor(private regiService: RegisterService,
              public fb: FormBuilder, 
              public alertController: AlertController,
              private router: Router,
              public navCtrl: NavController) { 
              //** FORMULARIO LOCALSTORAGE */
     
  }

  ngOnInit() {

    this.regiService.cargarComuna()
    .subscribe( data =>{
      this.comuna = data
    });

    this.regiService.cargarRegion()
    .subscribe( data =>{
      this.region = data
    });

    this.regiService.cargarPaises()
    .subscribe( data =>{
      this.paises = data
    });
  }

//** LOCALSTORAGE *//




//** //////////////// */

registroAdmin() {
  if(this.admin.ID_ADMIN==""){
  }else if(this.admin.ROL_ADMIN==""){
    }else if(this.admin.RUT_ADMIN==""){
    }else if(this.admin.PNOMBRE==""){
    }else if(this.admin.SNOMBRE==""){
    }else if(this.admin.PAPELLIDO==""){
    }else if(this.admin.SAPELLIDO==""){
    }else if(this.admin.EMAIL==""){
    }else if(this.admin.CLAVE==""){
    }else{
      this.regiService.postAdmin(this.admin.ID_ADMIN,this.admin.ROL_ADMIN,this.admin.RUT_ADMIN,this.admin.PNOMBRE,
        this.admin.SNOMBRE,this.admin.PAPELLIDO,this.admin.SAPELLIDO,this.admin.EMAIL,this.admin.CLAVE).subscribe((resultado)=> {
          
        console.log(resultado);
        localStorage.setItem('Administrador', JSON.stringify(this.admin));
        this.navCtrl.navigateRoot('/login');
        this.presentAlert("");
      });
    }
}


async presentAlert(mensaje) {
  this.alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Usuario Creado',
    subHeader: 'Ya puedes Iniciar Sesion',
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
  





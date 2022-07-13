import { Component, OnInit } from '@angular/core';
//importando librerias
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

 // formularioRegistro: FormGroup;

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
    COMUNA_ID:"",
    REGION_ID:"",
    PAIS_ID:""
  }
  public paises = [];
  public region = [];
  public comuna = [];

  constructor(private regiService: RegisterService,
              public fb: FormBuilder, 
              public alertController: AlertController,
              private router: Router,
              public navCtrl: NavController) { 
              //** FORMULARIO LOCALSTORAGE */
 //               this.formularioRegistro = this.fb.group({
 //                 'rut': new FormControl("", Validators.required),
 //                 'pNombre': new FormControl("", Validators.required),
 //                 'sNombre': new FormControl("", Validators.required),
 //                 'pApellido': new FormControl("", Validators.required),
 //                 'sApellido': new FormControl("", Validators.required),
 //                 'email': new FormControl("", Validators.required),
 //                 'confirmarEmail': new FormControl("", Validators.required),
 //                 'password': new FormControl("", Validators.required),
 //                 'confirmarPassword': new FormControl("", Validators.required),
 //                 'telefono': new FormControl("", Validators.required),
 //                 'fecha': new FormControl("", Validators.required),
 //                 'comuna': new FormControl("", Validators.required),
 //                 'region': new FormControl("", Validators.required),
 //                 'pais': new FormControl("", Validators.required)
 //               })
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
//  async guardar(){
//    var f = this.formularioRegistro.value;

//    if(this.formularioRegistro.invalid){
        
//        const alert = await this.alertController.create({
//          cssClass: 'my-custom-class',
//          header: 'Error',
//          subHeader: '',
//          message: 'Debe ingresar todo los datos',
//          buttons: ['Aceptar']
 //       });
    
 //       await alert.present();
 //       return ;

 // }

 // var usuario  = {

  //  rut: f.rut,
  //  pNombre: f.pNombre,
  //  Snombre: f.sNombre,
  //  pApellido: f.pApellido,
  //  sApellivo: f.sApellido,
  //  email: f.email,
  //  confirmarEmail: f.confirmarEmail,
  //  password: f.password,
  //  confirmarPassword: f.confirmarPassword,
   // telefono: f.telefono,
   // fecha: f.fecha,
  //  comuna: f.comuna,
  // region: f.region,
   // pais: f.pais

 // }

//  localStorage.setItem('Usuario', JSON.stringify(usuario));
 // localStorage.setItem('ingresado','true');
//      this.navCtrl.navigateRoot('/login');
  
//  }

//** //////////////// */

registroAdmin() {
  if(this.admin.ROL_ADMIN==""){
    }else if(this.admin.RUT_ADMIN==""){
    }else if(this.admin.PNOMBRE==""){
    }else if(this.admin.SNOMBRE==""){
    }else if(this.admin.PAPELLIDO==""){
    }else if(this.admin.SAPELLIDO==""){
    }else if(this.admin.EMAIL==""){
    }else if(this.admin.CLAVE==""){
    }else if(this.admin.FECHA_NACIMIENTO==""){
    }else if(this.admin.COMUNA_ID==""){
    }else if(this.admin.REGION_ID==""){
    }else if(this.admin.PAIS_ID==""){
    }else{
      this.regiService.postAdmin(this.admin.ROL_ADMIN,this.admin.RUT_ADMIN,this.admin.PNOMBRE,
        this.admin.SNOMBRE,this.admin.PAPELLIDO,this.admin.SAPELLIDO,this.admin.EMAIL,this.admin.CLAVE,
        this.admin.FECHA_NACIMIENTO,this.admin.COMUNA_ID,this.admin.REGION_ID,this.admin.PAIS_ID).subscribe((resultado)=> {
        this.router.navigate(['/login']);
        console.log(resultado);
      });
    }
}


}
  





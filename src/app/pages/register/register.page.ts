import { Component, OnInit } from '@angular/core';
//importando librerias
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'; //es el servicio get

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
/*
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
      'region': new FormControl("", Validators.required)

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
    region: f.region

  }

  localStorage.setItem('Usuario', JSON.stringify(usuario));
  localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('login');}
}
*/
////

export class RegisterPage  implements OnInit  {
  formularioRegistro: FormGroup;
  nom = new FormControl              ('') ;
  pAPEL  = new FormControl          ('') ;
  sAPELLDO  = new FormControl          ('') ;
  eMAIL  = new FormControl              ('') ;
  confirmarEmail  = new FormControl     ('') ;
  pASS  = new FormControl           ('') ;
  confirmarPassword  = new FormControl  ('') ;
  pAIS  = new FormControl               ('') ;
  cOMUNA  = new FormControl             ('') ;
  rEGION  = new FormControl             ('') ;

  constructor(public servicioUser: AuthService) {
    this.servicioUser.cargarPaises(); /// solo cuando quiero que se muestre en la carga de la pagina
    this.servicioUser.cargarComuna(); /// solo cuando quiero que se muestre en la carga de la pagina
    this.servicioUser.cargarRegion(); /// solo cuando quiero que se muestre en la carga de la pagina
   }
   ngOnInit() {
  }
//metodo get para traer los paises
 async mostrarPaiseS(){
  const nombrePaises = await this.servicioUser.cargarPaises();
  this.pAIS.setValue(nombrePaises[1].NOMBRE_PAIS); // muestra por pantalla el nombre del pais
}
async mostrarComuna(){
  const nombreComunas = await this.servicioUser.cargarComuna();
  this.cOMUNA.setValue(nombreComunas[1].NOMBRE_PAIS); // muestra por pantalla el nombre del pais
}
async mostrarRegion(){
  const nombreRegiones = await this.servicioUser.cargarRegion();
  this.rEGION.setValue(nombreRegiones[1].NOMBRE_PAIS); // muestra por pantalla el nombre del pais
}

//metodo agregar user
async agregarUser(nom: string,pAPEL: string,sAPELLDO: string,eMAIL: string,pASS: string,pAIS: string,cOMUNA: string,rEGION: string){
  const nombrePaises = await this.servicioUser.agregarUser(nom,pAPEL,sAPELLDO,eMAIL,pASS,pAIS,cOMUNA,rEGION);
}

}

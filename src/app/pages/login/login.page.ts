import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { LoginRolesService } from 'src/app/login-roles.service';

//Importando Librerias



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



   user ={ name: 'admin', pw: 'admin'}


  formularioLogin: FormGroup;

  constructor( public fb: FormBuilder, 
              public alertController: AlertController, 
              public LogServ: LoginRolesService,
              public alert: AlertController,
              public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({

      'email' : new FormControl("", Validators.required),
      'password' : new FormControl("", Validators.required)
    })

  }
  ngOnInit() {
  }

  async loginUser(){

this.LogServ.login(this.user.name, this.user.pw ).then(success => {
  if(success){
      this.navCtrl.navigateRoot('owner');
  }

}).catch(async err =>{
const alert = await this.alertController.create({
  cssClass: 'my-custom-class',
  header: 'Error',
  subHeader: '',
  message: 'Debe ingresar todo los datos',
  buttons: ['Aceptar']
});

await alert.present();
return ;
});
  }

}





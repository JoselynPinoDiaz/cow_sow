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

  formularioRegistro: FormGroup;

  constructor(private regiService: RegisterService,
              public fb: FormBuilder, 
              public alertController: AlertController,
              private router: Router,
              public navCtrl: NavController) { 

                this.formularioRegistro = this.fb.group({
                  'rut': new FormControl("", Validators.required),
                  'pNombre': new FormControl("", Validators.required),
                  'sNombre': new FormControl("", Validators.required),
                  'pApellido': new FormControl("", Validators.required),
                  'sApellido': new FormControl("", Validators.required),
                  'email': new FormControl("", Validators.required),
                  'confirmarEmail': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'confirmarPassword': new FormControl("", Validators.required),
                  'telefono': new FormControl("", Validators.required),
                  'fecha': new FormControl("", Validators.required),
                  'comuna': new FormControl("", Validators.required),
                  'region': new FormControl("", Validators.required),
                  'pais': new FormControl("", Validators.required)
                  
            
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

    rut: f.rut,
    pNombre: f.pNombre,
    Snombre: f.sNombre,
    pApellido: f.pApellido,
    sApellivo: f.sApellido,
    email: f.email,
    confirmarEmail: f.confirmarEmail,
    password: f.password,
    confirmarPassword: f.confirmarPassword,
    telefono: f.telefono,
    fecha: f.fecha,
    comuna: f.comuna,
    region: f.region,
    pais: f.pais

  }

  localStorage.setItem('Usuario', JSON.stringify(usuario));
  localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('login');
  
  }
  }
  





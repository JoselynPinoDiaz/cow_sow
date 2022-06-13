import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  formularioEmpleado: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController) { 

    this.formularioEmpleado = this.fb.group({

      'nombre': new FormControl("", Validators.required),
      'pApellido': new FormControl("", Validators.required),
      'sApellido': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'confirmarEmail': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmarPassword': new FormControl("", Validators.required),
      'fecha_nacimiento': new FormControl("", Validators.required),
      'comuna': new FormControl("", Validators.required),
      'region': new FormControl("", Validators.required),
      'pais': new FormControl("", Validators.required),
      'tipoEmpleado': new FormControl("", Validators.required)
    })

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioEmpleado.value;


    if(this.formularioEmpleado.invalid){
      
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

  var Empleado = {

    nombre: f.nombre,
    pApellido: f.pApellido,
    sApellivo: f.sApellido,
    email: f.email,
    confirmarEmail: f.confirmarEmail,
    password: f.password,
    confirmarPassword: f.confirmarPassword,
    fecha_nacimiento: f.fecha_nacimiento,
    comuna: f.comuna,
    region: f.region,
    pais: f.pais,
    tipoEmpleado: f.tipoEmpleado

  }

  localStorage.setItem('Empleado', JSON.stringify(Empleado));
  
  }

}

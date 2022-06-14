import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.page.html',
  styleUrls: ['./create-employee.page.scss'],
})
export class CreateEmployeePage implements OnInit {

  formularioEmpleado: FormGroup;
  public paises;
  public tipoEmpleado;
  public region;
  public comuna;

  constructor(public fb: FormBuilder, public alertController: AlertController,public servicioPaises: AuthService) {
    this.formularioEmpleado = this.fb.group({

      nombre: new FormControl('', Validators.required),
      pApellido: new FormControl('', Validators.required),
      sApellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      confirmarEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmarPassword: new FormControl('', Validators.required),
      comuna: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      pais: new FormControl('', Validators.required),
      tipoEmpleado: new FormControl('', Validators.required)
    });

  }

  public async obtenerPaises() {
    this.paises = await this.servicioPaises.cargarPaises();
  }
  public async obtenerTipoUsuario() {
    this.tipoEmpleado = await this.servicioPaises.cargarTipUser();
  }
  public async obtenerRegion() {
    this.region = await this.servicioPaises.cargarRegion();
  }
  public async obtenerComuna() {
    this.comuna = await this.servicioPaises.cargarComuna();
  }

  async ngOnInit() {
    await this.obtenerPaises();
    await this.obtenerTipoUsuario();
    await this.obtenerRegion();
    await this.obtenerComuna();

  }

  public async guardar(){
    const f = this.formularioEmpleado.value;


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

  const empleado = {
    nombre: f.nombre,
    pApellido: f.pApellido,
    sApellivo: f.sApellido,
    email: f.email,
    confirmarEmail: f.confirmarEmail,
    password: f.password,
    confirmarPassword: f.confirmarPassword,
    comuna: f.comuna,
    region: f.region,
    pais: f.pais,
    tipoEmpleado: f.tipoEmpleado
  } ;

  localStorage.setItem('Empleado', JSON.stringify(empleado));

  }

}

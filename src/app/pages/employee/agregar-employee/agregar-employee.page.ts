import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';
import { Empleado } from '../../modelos/employee.interface';

@Component({
  selector: 'app-agregar-employee',
  templateUrl: './agregar-employee.page.html',
  styleUrls: ['./agregar-employee.page.scss'],
})
export class AgregarEmployeePage implements OnInit {

  url = 'http://localhost:8201/TPUSUARIOS/'

  constructor(private serviEmpleado: EmployeeService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit() {}

  agregarNuevoContacto(ID_TIPO_USUARIO,EMAIL, TIPO_USUARIO, DESCRIPCION){
    const empleado : Empleado = {     
      ID_TIPO_USUARIO: ID_TIPO_USUARIO.value,
      EMAIL:EMAIL.value,
      TIPO_USUARIO: TIPO_USUARIO.value,
      DESCRIPCION: DESCRIPCION.value,
      VISTAS: "0"
    }
    this.serviEmpleado.agregarEmpleado(empleado)
    .subscribe(data =>{
     this.router.navigate(['/employee'])
    
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  public rut: number;
  public nombre: string;
  public email: string;
  public telefono: string;
  public fecha_nacimiento: string;
  public tipo_usuario: string;
  public direccion: string;
  public tipo_direccion: string;
  public comuna: string;
  public region: string;
  public pais: string;

  constructor( public  Sempleado: EmployeeService) { }

  ngOnInit() {
  }

  async empleado(){
    const empleados = await this.Sempleado.empleado();
    this.rut = empleados[0].RUT_EMPLEADO;
    this.nombre = empleados[0].NOMBRE;
    this.email = empleados[0].EMAIL;
    this.telefono = empleados[0].TELEFONO;
    this.fecha_nacimiento = empleados[0].FECHA_NACIMIENTO;
    this.tipo_usuario = empleados[0].TIPO_USUARIO;
    this.direccion = empleados[0].DIRECCION;
    this.tipo_direccion = empleados[0].TIPO_DIRECCION;
    this.comuna = empleados[0].NOMBRE_COMUNA;
    this.region = empleados[0].NOMBRE_REGION;
    this.pais = empleados[0].NOMBRE_PAIS;

 }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Empleado } from '../../modelos/employee.interface';

@Component({
  selector: 'app-detlle-employee',
  templateUrl: './detlle-employee.page.html',
  styleUrls: ['./detlle-employee.page.scss'],
})
export class DetlleEmployeePage implements OnInit {

  url = 'http://localhost:8201/TPUSUARIOS/'

  Einfo: Empleado

  constructor( private EinfoService: EmployeeService,
                private router: Router,
                private activate: ActivatedRoute) { }

  ngOnInit() {

    this.activate.paramMap.subscribe (paramMap => {
      //redireccionar
      const ID_TIPO_USUARIO = paramMap.get('employeeId');
      this.EinfoService.infoEmpleados(ID_TIPO_USUARIO).subscribe(data => {
        this.Einfo = data
      })
    })

  }


  eliminarEmpleado(){

  }


}

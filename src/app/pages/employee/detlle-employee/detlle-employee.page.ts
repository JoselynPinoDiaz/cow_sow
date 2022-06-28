import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detlle-employee',
  templateUrl: './detlle-employee.page.html',
  styleUrls: ['./detlle-employee.page.scss'],
})
export class DetlleEmployeePage implements OnInit {

  Einfo = []

  constructor( private EinfoService: EmployeeService,
                private router: Router,
                private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe (p => {
      //redireccionar
      //var id= p.get('numero_serie');
     // this.infoGanado = 
      this.EinfoService.infoEmpleados(p.get('employeeId'))
      .subscribe(data => {
        this.Einfo = data;
        //console.log(this.infoGanado)

      })
  })

  }


  eliminarEmpleado(){

  }


}

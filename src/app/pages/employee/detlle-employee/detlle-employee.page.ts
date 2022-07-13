import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detlle-employee',
  templateUrl: './detlle-employee.page.html',
  styleUrls: ['./detlle-employee.page.scss'],
})
export class DetlleEmployeePage implements OnInit {

  Einfo: any;


  constructor(
    private router: Router,
    private activate: ActivatedRoute,
    private http: HttpClient,
    public getService: EmployeeService) { }



  ngOnInit() {
    this.activate.paramMap.subscribe(p => {
      //redireccionar
      const RUT_PERSONA = p.get('employeeId')
    this.getService.getInfoEmpleados(p.get('RUT_PERSONA'))
        .subscribe(data => {
        this.Einfo = data
       });
    });

  }
}
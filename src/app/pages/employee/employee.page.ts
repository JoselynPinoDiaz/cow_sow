import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  public Empleado = []

  constructor( public  Sempleado: EmployeeService,
                public modalCtrl: ModalController, 
                public navCtrl: NavController,
                private routerOutlet: IonRouterOutlet,
                private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.Sempleado.cargarEmpleados()
    .subscribe( data =>{
      this.Empleado = data
    })
  }

  agregarEmpleado(){
    this.router.navigate(['/agregar-empleados'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  
  
}

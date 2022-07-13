import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  public Empleado = [];

  constructor( 
                public modalCtrl: ModalController, 
                public navCtrl: NavController,
                private routerOutlet: IonRouterOutlet,
                private router: Router,
                public getService:EmployeeService
                ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getService.getEmpleados()
    .subscribe( data =>{
      this.Empleado = data;
    })
  }


  
  agregarEmpleado(){
    this.router.navigate(['/agregar-empleados'])
  }

  cerrarSecion(){
    localStorage.removeItem('UsuarioLogueado');
    this.router.navigate(['/home'])
  }

  
  
  
}

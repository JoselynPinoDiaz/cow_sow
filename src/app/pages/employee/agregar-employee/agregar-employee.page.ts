import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-agregar-employee',
  templateUrl: './agregar-employee.page.html',
  styleUrls: ['./agregar-employee.page.scss'],
})
export class AgregarEmployeePage implements OnInit {

  usuario: any={
      RUT_PERSONA:"",
      PNOMBRE:"",
      SNOMBRE:"",
      PAPELLIDO:"",
      SAPELLIDO:"",
      FECHA_NACIMIENTO:"",
      TIPO_USUARIO:"",
      EMAIL:"",
      CLAVE: ""
  }

  public propiedad = [];

  constructor(private serviEmpleado: EmployeeService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit() {
    this.serviEmpleado.getPropiedad()
    .subscribe( data =>{
      this.propiedad = data
    });
  }

  agregarEmpleado(){   
     if (this.usuario.RUT_PERSONA==""){
     }else if (this.usuario.PNOMBRE ==""){
     }else if(this.usuario.SNOMBRE==""){
    }else if (this.usuario.PAPELLIDO==""){
    }else if(this.usuario.SAPELLIDO==""){
    }else if (this.usuario.FECHA_NACIMIENTO==""){
    }else if(this.usuario.TIPO_USUARIO==""){
    }else if (this.usuario.EMAIL ==""){
    }else if(this.usuario.CLAVE==""){
     }else{
        this.serviEmpleado.postEmpleado(this.usuario.RUT_PERSONA,this.usuario.PNOMBRE,this.usuario.SNOMBRE,this.usuario.PAPELLIDO,this.usuario.SAPELLIDO,this.usuario.FECHA_NACIMIENTO,this.usuario.TIPO_USUARIO,this.usuario.EMAIL,this.usuario.CLAVE).subscribe((resultado)=>{
          console.log(resultado);
           this.router.navigate(['/employee'])
           
      });
     }
    }



  }
    
    
    
    

  



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

  alert:any;

  usuario: any={
    ID_ADMIN:"",
      RUT:"",
      PNOMBRE:"",
      SNOMBRE:"",
      PAPELLIDO:"",
      SAPELLIDO:"",
      FECHA_NACIMIENTO:"",
      ROL_USUARIO:"",
      EMAIL:"",
      CLAVE: "",
      ID_PROPIEDAD:""
  }

  public propiedad = [];

  constructor(private serviEmpleado: EmployeeService,
              private router: Router,
              private alertController: AlertController,) { }

  ngOnInit() {
    this.serviEmpleado.getPropiedad()
    .subscribe( data =>{
      this.propiedad = data
    });
  }

  agregarEmpleado(){   
      if (this.usuario.RUT ==""){
     }else if (this.usuario.PNOMBRE ==""){
     }else if(this.usuario.SNOMBRE==""){
    }else if (this.usuario.PAPELLIDO==""){
    }else if(this.usuario.SAPELLIDO==""){
    }else if(this.usuario.ROL_USUARIO==""){
    }else if (this.usuario.EMAIL ==""){
    }else if(this.usuario.CLAVE==""){
    }else if(this.usuario.ID_PROPIEDAD==""){ 
     }else{
        this.serviEmpleado.postEmpleado(this.usuario.RUT,this.usuario.PNOMBRE,this.usuario.SNOMBRE,this.usuario.PAPELLIDO,this.usuario.SAPELLIDO,this.usuario.ROL_USUARIO,this.usuario.EMAIL,this.usuario.CLAVE,this.usuario.ID_PROPIEDAD).subscribe((resultado)=>{
          console.log(resultado);
           this.router.navigate(['/employee'])
           this.presentAlert("");
           
      });
     }
    }
    async presentAlert(mensaje) {
      this.alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Empleado Creado Correctamente',
        message: mensaje,
        buttons: ['Aceptar']
      });
      await this.alert.present();
    }
    




  }
    
    
    
    

  



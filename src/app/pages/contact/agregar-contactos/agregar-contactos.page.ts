import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-agregar-contactos',
  templateUrl: './agregar-contactos.page.html',
  styleUrls: ['./agregar-contactos.page.scss'],
})
export class AgregarContactosPage implements OnInit {


  contacto: any = {
    NOMBRE: "",
    EMAIL: "",
    TELEFONO: "",
    DESCRIPCION: ""
  }


  constructor(private serviContacto: ContactService,
    private router: Router,
    private alert: AlertController,) { }

  ngOnInit() { }


  agregarContacto() {
    if(this.contacto.NOMBRE==""){
      }else if(this.contacto.EMAIL==""){
      }else if(this.contacto.TELEFONO==""){
      }else if(this.contacto.DESCRIPCION==""){
      }else{
        this.serviContacto.crearContacto(this.contacto.NOMBRE,this.contacto.EMAIL,this.contacto.TELEFONO,this.contacto.DESCRIPCION).subscribe((resultado)=> {
          this.router.navigate(['/contact']);
          console.log(resultado);
        });
      }
  }

  cerrarSecion() {
    this.router.navigate(['/home'])
  }



}





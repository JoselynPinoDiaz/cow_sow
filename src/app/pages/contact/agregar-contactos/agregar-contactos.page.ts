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

  alert:any;

  contacto: any = {
    NOMBRE: "",
    EMAIL: "",
    TELEFONO: "",
    DESCRIPCION: ""
  }


  constructor(private serviContacto: ContactService,
    private router: Router,
    private alertController: AlertController,) { }

  ngOnInit() { }


  agregarContacto() {
    if(this.contacto.NOMBRE==""){
      }else if(this.contacto.EMAIL==""){
      }else if(this.contacto.TELEFONO==""){
      }else if(this.contacto.DESCRIPCION==""){
      }else{
        this.serviContacto.crearContacto(this.contacto.NOMBRE,this.contacto.EMAIL,this.contacto.TELEFONO,this.contacto.DESCRIPCION).subscribe((resultado)=> {
          localStorage.setItem('Contacto', JSON.stringify(this.contacto));
          this.presentAlert("");
          this.router.navigate(['/contact']);
          console.log(resultado);
        });
      }
  }

 

async presentAlert(mensaje) {
  this.alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Contacto Creado Correctamente',
    message: mensaje,
    buttons: ['Aceptar']
  });
  await this.alert.present();
}

cerrarSecion() {
  this.router.navigate(['/home'])
}




}





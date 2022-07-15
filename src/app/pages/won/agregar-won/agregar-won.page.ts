import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { WonService } from '../won.service';



@Component({
  selector: 'app-agregar-won',
  templateUrl: './agregar-won.page.html',
  styleUrls: ['./agregar-won.page.scss'],
})
export class AgregarWonPage implements OnInit {

  alert;

ganado: any = {
    NUMERO_SERIE:"",
    TIPO_ANIMAL:"",
    RAZA:"",
    PESO:"",
    ANOS_EDAD:"",
    MESES_EDAD:"",
    CRIAS:"",
    TIPO_PRODUCCION:"",
    FECHA:"",
    PRECIO_COMPRA:"",
    PRECIO_VENTA:"",
    VACUNA:"",
    PRECIO_VACUNA:"",
    ENFERMEDAD:"",
    MEDICAMENTO:"",
    PRECIO_MEDICAMENTO:"",
    ID_PROPIEDAD:""
}

public propiedad = [];


  constructor(private wonService: WonService,
              private router: Router,
              private alertController: AlertController,
              public navCtrl: NavController) { }

  ngOnInit() { 
    this.wonService.cargarPropiedad()
    .subscribe( data =>{
      this.propiedad = data
    });

  }

/**  METODO CERRAR SESION*/ 
  cerrarSecion(){
    this.router.navigate(['/home'])
  }


  //*** METODO CREAR UN GANADO */

  crearGanado(){
  if (this.ganado.NUMERO_SERIE==""){
    }else if (this.ganado.TIPO_ANIMAL==""){
    }else if (this.ganado.RAZA==""){
    }else if (this.ganado.PESO==""){
    }else if (this.ganado.ANOS_EDAD==""){
    }else if (this.ganado.MESES_EDAD==""){
    }else if (this.ganado.CRIAS==""){
    }else if (this.ganado.TIPO_PRODUCCION==""){
    }else if (this.ganado.FECHA==""){
    }else if (this.ganado.PRECIO_COMPRA==""){
    }else if (this.ganado.PRECIO_VENTA==""){
    }else if (this.ganado.VACUNA==""){
    }else if (this.ganado.PRECIO_VACUNA==""){
    }else if (this.ganado.ENFERMEDAD==""){
    }else if (this.ganado.MEDICAMENTO==""){
    }else if (this.ganado.PRECIO_MEDICAMENTO==""){
    }else if (this.ganado.ID_PROPIEDAD==""){ 
    }else {
      this.wonService.postGanado(this.ganado.NUMERO_SERIE,this.ganado.TIPO_ANIMAL,this.ganado.RAZA,this.ganado.PESO,this.ganado.ANOS_EDAD,
        this.ganado.MESES_EDAD,this.ganado.CRIAS,this.ganado.TIPO_PRODUCCION,this.ganado.FECHA,this.ganado.PRECIO_COMPRA,
        this.ganado.PRECIO_VENTA,this.ganado.VACUNA,this.ganado.PRECIO_VACUNA,this.ganado.ENFERMEDAD,this.ganado.MEDICAMENTO,
        this.ganado.PRECIO_MEDICAMENTO,this.ganado.ID_PROPIEDAD).subscribe((resultado) => {
        console.log(resultado);         
        this.presentAlert("");
        this.router.navigate(['/won']);
        
        
    });
  }
}
async presentAlert(mensaje) {
  this.alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Ganado Creado Correctamente',
    message: mensaje,
    buttons: ['Aceptar']
  });
  await this.alert.present();
}



}

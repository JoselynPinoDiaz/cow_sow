import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SowingService } from '../sowing.service';


@Component({
  selector: 'app-agregar-sowing',
  templateUrl: './agregar-sowing.page.html',
  styleUrls: ['./agregar-sowing.page.scss'],
})
export class AgregarSowingPage implements OnInit {

  siembra: any = {
    TIPO_SIEMBRA:"",
    TIPO_FRU_VER:"",
    COLOR:"",
    VARIEDAD:"",
    CANTIDAD:"",
    METROS_OCUPADOS:"",
    FECHA:"",
    PRECIO_COMPRA:"",
    PRECIO_VENTA:"",
    FERTILIZANTE:"",
    PRECIO_FERTILIZANTE:"",
    FUMIGACION:"",
    PRECIO_FUMIGACION:"",
    ID_EVENTO:"",
    ID_PROPIEDAD:""
}

public propiedad = [];
public eventos = [];

  constructor(private ServiSowing: SowingService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit() {
    this.ServiSowing.cargarPropiedad()
    .subscribe( data =>{
      this.propiedad = data
    });

    this.ServiSowing.cargarEvento()
    .subscribe( data =>{
      this.eventos = data
    });
  }


  postSiembra(){
    if (this.siembra.TIPO_SIEMBRA==""){
      }else if (this.siembra.TIPO_FRU_VER==""){
      }else if (this.siembra.COLOR==""){
      }else if (this.siembra.VARIEDAD==""){
      }else if (this.siembra.CANTIDAD==""){
      }else if (this.siembra.METROS_OCUPADOS==""){
      }else if (this.siembra.FECHA==""){
      }else if (this.siembra.PRECIO_COMPRA==""){
      }else if (this.siembra.PRECIO_VENTA==""){
      }else if (this.siembra.FERTILIZANTE==""){
      }else if (this.siembra.PRECIO_FERTILIZANTE==""){
      }else if (this.siembra.FUMIGACION==""){
      }else if (this.siembra.PRECIO_FUMIGACION==""){
      }else if (this.siembra.ID_EVENTO==""){
      }else if (this.siembra.ID_PROPIEDAD==""){
      }else {
        this.ServiSowing.agregarSiembra(this.siembra.TIPO_SIEMBRA,this.siembra.TIPO_FRU_VER,this.siembra.COLOR,this.siembra.VARIEDAD,
          this.siembra.CANTIDAD,this.siembra.METROS_OCUPADOS,this.siembra.FECHA,this.siembra.PRECIO_COMPRA,this.siembra.PRECIO_VENTA,
          this.siembra.FERTILIZANTE,this.siembra.PRECIO_FERTILIZANTE,this.siembra.FUMIGACION,this.siembra.PRECIO_FUMIGACION,this.siembra.ID_EVENTO,this.siembra.ID_PROPIEDAD ).subscribe((resultado) => {  
            console.log(resultado); 
          this.router.navigate(['/sowing']);
          
      });
    }
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Siembra } from '../../modelos/sowing.interface';
import { SowingService } from '../sowing.service';


@Component({
  selector: 'app-agregar-sowing',
  templateUrl: './agregar-sowing.page.html',
  styleUrls: ['./agregar-sowing.page.scss'],
})
export class AgregarSowingPage implements OnInit {

  constructor(private ServiSowing: SowingService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit() {
  }


  agregarNuevoContacto(ID_SIEMBRA, TIPO_SIEMBRA,DESCRIPCION){
    const siembra : Siembra = {     
      ID_SIEMBRA:   ID_SIEMBRA.value,
      TIPO_SIEMBRA: TIPO_SIEMBRA.value,
      DESCRIPCION:  DESCRIPCION.value,
      VISTAS: "0"
    }
    this.ServiSowing.agregarSiembra(siembra)
    .subscribe(data =>{
     this.router.navigate(['/sowing'])
    
    })
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }

}

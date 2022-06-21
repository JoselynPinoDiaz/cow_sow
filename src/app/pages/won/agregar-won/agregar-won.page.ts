import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Ganado } from '../../modelos/won.interface';
import { WonService } from '../won.service';


@Component({
  selector: 'app-agregar-won',
  templateUrl: './agregar-won.page.html',
  styleUrls: ['./agregar-won.page.scss'],
})
export class AgregarWonPage implements OnInit {

  constructor(private wonService: WonService,
              private router: Router,
              private alert: AlertController,) { }

  ngOnInit() { }

  agregarNuevoContacto(NUMERO_SERIE, NOMBRE_ANIMAL, PESO){
    const ganado : Ganado = {     
      NUMERO_SERIE: NUMERO_SERIE.value,
      NOMBRE_ANIMAL: NOMBRE_ANIMAL.value,
      PESO:PESO.value,
      VISTAS: "0"
    }
    this.wonService.agregarGanado(ganado)
    .subscribe(data =>{
     this.router.navigate(['/won'])
    
    })
  }
  


}

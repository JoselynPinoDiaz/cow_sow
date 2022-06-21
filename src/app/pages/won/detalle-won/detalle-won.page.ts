import { Component, OnInit } from '@angular/core';
import { WonService } from '../won.service';
import { Ganado } from '../../modelos/won.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-won',
  templateUrl: './detalle-won.page.html',
  styleUrls: ['./detalle-won.page.scss'],
})
export class DetalleWonPage implements OnInit {

  infoGanado: Ganado

  constructor(private wonService: WonService,
              private router: Router,
              private activate: ActivatedRoute) { }

  ngOnInit() {

    this.activate.paramMap.subscribe (paramMap => {
      //redireccionar
      const NUMERO_SERIE = paramMap.get('wonId');
      this.wonService.infoGanado(NUMERO_SERIE).subscribe(data => {
        this.infoGanado = data
      })
    })
  }

  eliminarGanado(){

  }

}

import { Component, OnInit } from '@angular/core';
import { WonService } from '../won.service';
import { Ganado } from '../../modelos/won.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detalle-won',
  templateUrl: './detalle-won.page.html',
  styleUrls: ['./detalle-won.page.scss'],
})
export class DetalleWonPage implements OnInit {


    public peso: string;

   //dato = {};

  constructor(private wonService: WonService,
              private router: Router,
              private activate: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {

   //this.activate.paramMap.subscribe (p => {
      //redireccionar
      //var id= p.get('numero_serie');
     // this.wonService.getInfoGanado(p.get('numero_serie'))
      //.subscribe(data => {
       // this.infoGanado = data;
    //    console.log(this.infoGanado)

   //   })
 // })
  }
  async detalleGanado(){
    const ganados = await this.wonService.getInfoGanado();
    this.peso = ganados[0].PESO;

  
  }





  eliminarGanado(){

  }

}

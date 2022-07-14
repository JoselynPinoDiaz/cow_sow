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

   infoGanado = []


  constructor(private wonService: WonService,
              private router: Router,
              private activate: ActivatedRoute,
              private http: HttpClient) { }

            
    ngOnInit() {

      this.activate.paramMap.subscribe (p => {
        //redireccionar
        this.wonService.getinfoGanado(('numero_serie'))
        .subscribe(data => {
          this.infoGanado = data;
          console.log(data)
        })
    })
    }

  eliminarGanado(){}

  cerrarSecion(){
    this.router.navigate(['/home'])
  }

}

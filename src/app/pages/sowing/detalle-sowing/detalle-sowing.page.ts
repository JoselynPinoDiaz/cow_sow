import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Siembra } from '../../modelos/sowing.interface';
import { SowingService } from '../sowing.service';


@Component({
  selector: 'app-detalle-sowing',
  templateUrl: './detalle-sowing.page.html',
  styleUrls: ['./detalle-sowing.page.scss'],
})
export class DetalleSowingPage implements OnInit {

  url = 'http://localhost:8201/SIEMBRAS/'

  infoSiembra = []

  constructor(private SowingServi: SowingService,
              private router: Router,
              private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe (p => {
      //redireccionar
     // const ID_SIEMBRA = paramMap.get('sowingId');
      this.SowingServi.infoSiembra(p.get('sowing'))
      .subscribe(data => {
        this.infoSiembra = data
      })
    })
      
  }


  eliminarSiembra(){

  }
}

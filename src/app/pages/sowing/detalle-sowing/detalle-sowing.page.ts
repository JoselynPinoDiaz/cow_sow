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

  infoSiembra: Siembra

  constructor(private SowingServi: SowingService,
              private router: Router,
              private activate: ActivatedRoute) { }

  ngOnInit() {
    this.activate.paramMap.subscribe (paramMap => {
      //redireccionar
      const ID_SIEMBRA = paramMap.get('sowingId');
      this.SowingServi.infoSiembra(ID_SIEMBRA).subscribe(data => {
        this.infoSiembra = data
      })
    })
      
  }


  eliminarContacto(){

  }
}

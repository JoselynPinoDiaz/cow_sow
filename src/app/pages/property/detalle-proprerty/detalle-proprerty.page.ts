import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-detalle-proprerty',
  templateUrl: './detalle-proprerty.page.html',
  styleUrls: ['./detalle-proprerty.page.scss'],
})
export class DetalleProprertyPage implements OnInit {

  url = 'http://localhost:8201/PROPIEDADES/'

  infopropiedad = []

  constructor(private infoProperty: PropertyService,
              private router: Router,
              private activate: ActivatedRoute) { }

  ngOnInit() {
  

  this.activate.paramMap.subscribe (p => {
    //redireccionar
    //const ID_PROPIEDAD = paramMap.get('propertyId');
    this.infoProperty.infoPropiedad(p.get('propertyId'))
    .subscribe(data => {
      this.infopropiedad = data
    })
  })
    
}


eliminarPropiedad(){

}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../modelos/conatcto.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

  url = 'http://localhost:8201/CONTACTOS/'

   info: Contacto

  constructor(private infoServi: ContactService, 
              private router: Router,
              private activate: ActivatedRoute) { }

  ngOnInit() {

    this.activate.paramMap.subscribe(paramMap=> {
      //redireccionar
      const ID_CONTACTO = paramMap.get('contactId');
      this.infoServi.infoContactos(ID_CONTACTO).subscribe(data => {
        this.info = data
      })
    })
      
  }


  eliminarContacto(){

  }


  



}

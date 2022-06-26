import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';
import { Contacto } from '../../modelos/conatcto.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.page.html',
  styleUrls: ['./detalle-contacto.page.scss'],
})
export class DetalleContactoPage implements OnInit {

 public info = [];

  constructor(private infoServi: ContactService, 
              private router: Router,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              public activate: ActivatedRoute) { }

  ngOnInit() {

    this.activate.paramMap.subscribe(param=> {
      //redireccionar
      var id = param.get('contactId');
      this.infoServi.infoContactos(id)
      .subscribe(data => {
        this.info = data
    }) 
  })  
  }

  eliminarContacto(){

  }


  onViewWillEnter(){

   
  }

  



}
function ID_CONTACTO(ID_CONTACTO: any) {
  throw new Error('Function not implemented.');
}


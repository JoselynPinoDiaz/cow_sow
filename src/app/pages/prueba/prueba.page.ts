import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  infoContacto: any = []

  contactoID:string;
  
  contacto: any = {
    ID_CONTACTO:"",
    NOMBRE: "",
    EMAIL: "",
    TELEFONO: "",
    DESCRIPCION: ""
  }
  
  
    constructor(private infoServi: ContactService, 
                private router: Router,
                public modalCtrl: ModalController, 
                public navCtrl: NavController,
                public activate: ActivatedRoute,
                private http: HttpClient) { }
  
    ngOnInit() {
    }

}
import { Component, OnInit,Input} from '@angular/core';
import { IonRouterOutlet, ModalController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

public Lcontactos = [];
  


  constructor(public Scontacto: ContactService, 
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router
             ) { }

   
  ngOnInit (){
    this.Scontacto.cargarContactos()
    .subscribe( data =>{
      this.Lcontactos = data
    })
  }

  
  ionViewWillEnter(){
    this.Scontacto.cargarContactos()
    .subscribe( data =>{
      this.Lcontactos = data
    })
  }

  agregarContacto(){
    this.router.navigate(['/agregar-contactos'])
  }


}


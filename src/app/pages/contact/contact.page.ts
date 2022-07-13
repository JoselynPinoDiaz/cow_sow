import { Component, OnInit,Input} from '@angular/core';
import { IonRouterOutlet, ModalController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';
import { CONTACTOS } from 'src/app/services/contacto-crud.service';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

Lcontactos = [];
  


  constructor(public Scontacto: ContactService, 
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router,
              private activate: ActivatedRoute
             ) { }

   
  ngOnInit (){}

  
  ionViewWillEnter(){
    this.Scontacto.cargarContactos()
    .subscribe( data =>{
      this.Lcontactos = data
    });
  }

 
 ////Trae todo los Contactos
  getAllContactos(){
    //get saved lista Lcontactos
    this.Scontacto.cargarContactos().subscribe(res =>{
      console.log(res);
      this.Lcontactos = res;
    })
  }




  agregarContacto(){
    this.router.navigate(['/agregar-contactos'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }



}


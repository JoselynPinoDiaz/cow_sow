import { Component, OnInit,Input} from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonRouterOutlet, ModalController, NavController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service'; 



@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public nombre: string;
  public email: string;
  public telefono: string;
  public descripcionCO: string;




  constructor(public Scontacto: AuthService, 
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
             ) { 
   
    }
  ngOnInit (){
    
  }
  async listaContacto(){
    const contactos = await this.Scontacto.cargarContacto();
    this.nombre = contactos[0].NOMBRE;
    this.email = contactos[0].EMAIL;
    this.telefono = contactos[0].TELEFONO;
    this.descripcionCO = contactos[0].DESCRIPCION;
  
  }

 
   


}


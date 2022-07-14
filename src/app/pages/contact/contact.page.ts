import { Component, OnInit,Input} from '@angular/core';
import { AlertController, IonRouterOutlet, ModalController, NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ContactService } from './contact.service';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';





@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

Lcontactos = [];
  
usuario:any;


  constructor(public Scontacto: ContactService, 
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router,
              private activate: ActivatedRoute,
              private alertController: AlertController

             ) { }

   
  ngOnInit (){}

  
  ionViewWillEnter(){
    this.Scontacto.cargarContactos()
    .subscribe( data =>{
      this.Lcontactos = data
    });
  }

 
actualiar(){}


deleteUser(id) {
  this.Scontacto.DeleteUser('id').subscribe((res: any[]) => {
    console.log(res);
    this.Lcontactos = res;
  })
}


public  deleteContacto(ID_CONTACTO){
    this.Scontacto.DeleteUser(ID_CONTACTO).subscribe((resultado)=>{
      console.log(resultado);
      this.usuario = resultado;
      
      
    })  
  }


  //*** */



  agregarContacto(){
    this.router.navigate(['/agregar-contactos'])
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }

  
  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself'
        }
      ]
    });

    await alert.present();
  }

 

}


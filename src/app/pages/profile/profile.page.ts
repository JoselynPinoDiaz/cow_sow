import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';
import { IonRouterOutlet, ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public perfil = []



  constructor(public Sprofile: ProfileService,
              public modalCtrl: ModalController, 
              public navCtrl: NavController,
              private routerOutlet: IonRouterOutlet,
              private router: Router) { 
    //this.ProfileService.perfil();
  }
      
  ngOnInit() {
    this.Sprofile.cargarPerfil()
    .subscribe( data =>{
      this.perfil = data
    })

  }

  onViewWillEnter(){
   
  }

  modificarPerfil(){
    
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  
  
  }


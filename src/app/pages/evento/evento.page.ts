import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  constructor(public navCtrl: NavController,
    private routerOutlet: IonRouterOutlet,
    private router: Router) { }

  ngOnInit() {
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  
}

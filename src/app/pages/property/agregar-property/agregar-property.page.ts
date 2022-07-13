import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, NavController } from '@ionic/angular';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-agregar-property',
  templateUrl: './agregar-property.page.html',
  styleUrls: ['./agregar-property.page.scss'],
})
export class AgregarPropertyPage implements OnInit {

  propiedad: any ={
    NOMBRE_PROPIEDAD:"",
    DIRECCION:"",
    HECTAREAS:"",
    ID_COMUNA:""
  }

  public comuna = [];

  constructor(public navCtrl: NavController,
    public serviPropiedad : PropertyService,
    private routerOutlet: IonRouterOutlet,
    private router: Router) { }

  ngOnInit() {
    this.serviPropiedad.cargarComuna()
    .subscribe( data =>{
      this.comuna = data
    });
  }



  agregarPropiedad() {
    if(this.propiedad.NOMBRE_PROPIEDAD==""){
      }else if(this.propiedad.DIRECCION==""){
      }else if(this.propiedad.HECTAREAS==""){
      }else if(this.propiedad.ID_COMUNA==""){
      }else{
        this.serviPropiedad.postPropiedad(this.propiedad.NOMBRE_PROPIEDAD,this.propiedad.DIRECCION,this.propiedad.HECTAREAS,this.propiedad.ID_COMUNA).subscribe((resultado)=> {
          console.log(resultado);
          this.router.navigate(['/property']);
          
        });
      }
  }

  cerrarSecion(){
    this.router.navigate(['/home'])
  }
  

}

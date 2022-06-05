//import { Component } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; //es el servicio get

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

/*
export class HomePage implements OnInit{

  paises: any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio
  //nombre = new FormControl('');
  constructor(public services: AuthService){ }
  ngOnInit(){}
  }
  /*
  ionViewDidLoad() {
    this.getPosts();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPosts() { //llamamos a la funcion getPost de nuestro servicio.
    this.postServices.getPosts()
    .then(data => {
      this.arrayPosts = data;
    });
  }

  //cambiarNombre(){
    //this.nombre.setValue('Ornitorrinco');
  //}
}

///primra vista
*/export class HomePage {

  nombre = new FormControl('');
  constructor(public servicioPaises: AuthService) {
   // this.servicioPaises.cargarPaises(); /// solo cuando quiero que se muestre en la carga de la pagina

  }


 async cambiarNombre(){
  const nombrePaises = await this.servicioPaises.cargarPaises();
  this.nombre.setValue(nombrePaises[0].NOMBRE_PAIS);

}
}

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
  idPais = new FormControl('');
  nombrePais = new FormControl('');
  desPais = new FormControl('');
  constructor(public servicioPaises: AuthService) {
   // this.servicioPaises.cargarPaises(); /// solo cuando quiero que se muestre en la carga de la pagina

  }
//metodo get para traer los paises
 async mostrarPaiseS(){
  const nombrePaises = await this.servicioPaises.cargarPaises();
  this.nombre.setValue(nombrePaises[1].NOMBRE_PAIS); // muestra por pantalla el nombre del pais
}
//metodo elimar pais
async eliminarPais(idPais: string){ /// deberia entrar un parametro de id
  //this.nombre.setValue(idPais);
  const nombrePaises = await this.servicioPaises.eliminarPaises(idPais);  // deberia usar el parametro de entrada para que funcione el metdo
//  this.nombre.setValue(nombrePaises[1].NOMBRE_PAIS); // no deberia aparecer argentina
}
//metodo agregar pais
async agregarPais(idPais: string,nombrePais: string,desPais: string){
  const nombrePaises = await this.servicioPaises.agregarPaises(idPais,nombrePais,desPais);
}

}

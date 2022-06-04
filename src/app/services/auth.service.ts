/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {
  constructor(private http: HttpClient) {
    this.cargarPaises();

  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  paises: any [] = [];
  //metodo para mostrar paises
  private cargarPaises(){
    this.http.get('http://localhost:8201/paises')
    .subscribe( (resp: any[]) =>{  //NOS DEVUELVA LOS DATOS EN UN ARREGLO
      this.paises =resp;
      console.log(this.paises);

    });
  }
}
/*
  getPosts(){
    return new Promise(resolve=>{
      this.http.get(this.url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

}
/*import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private cargarPais(){
      }}
*/


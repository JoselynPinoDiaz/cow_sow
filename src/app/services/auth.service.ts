/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {

  nombre: string;
  email: string;
  telefono: number;
  descripcion: string;

 constructor(private http: HttpClient) {
  }

public async cargarPaises(){
   const paises = await this.http.get('http://localhost:8201/paises').toPromise();
   return paises;

}
}
     
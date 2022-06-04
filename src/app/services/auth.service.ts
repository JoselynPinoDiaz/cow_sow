/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {
  constructor(private http: HttpClient) {
  }

public async cargarPaises(){
   const paises = await this.http.get('http://localhost:8201/paises').toPromise();
   return paises;

}
}

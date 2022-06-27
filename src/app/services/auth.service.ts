/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
export interface User {
  name: string;
  role: string;
  permissions: string[];
}
@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {

 constructor(private http: HttpClient, private router: Router) {
   
  }






}
     
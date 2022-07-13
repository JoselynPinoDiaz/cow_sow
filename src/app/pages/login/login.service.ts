import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8201/';


  constructor(private http: HttpClient, private router: Router) { }

  login(RUT_USUARIO, PASSWORD_USUARIO){
    return this.http.post(this.url + 'LOGIN', { 
    "RUT_USUARIO": RUT_USUARIO,
    "PASSWORD_USUARIO": PASSWORD_USUARIO})

  }

  loginAdmin(ROL_ADMIN, CLAVE){
    return this.http.post(this.url + 'LOGIN', { 
    "ROL_ADMIN": ROL_ADMIN,
    "CLAVE": CLAVE})

  }

  //guaro en el local storage
  setCurrentUser(user:any){
    let user_string = JSON.stringify(user);
    localStorage.setItem('UsuarioLogueado', user_string);
  }
  //obtengo valor del local storage
       getCurrentUser(){
    let userCurrent = localStorage.getItem('UsuarioLogueado');
    if(!0[userCurrent]){
      let user_Json = JSON.parse(userCurrent);
      return user_Json;

    }else{
      return null;
    }
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../modelos/users.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8201';


  constructor(private http: HttpClient, private router: Router) { }



  login(RUT_PERSONA, CLAVE){
    return this.http.post(this.http + 'loginEmpleado', { 
    "RUT_PERSONA": RUT_PERSONA,
    "CLAVE": CLAVE})

  }
 
  loginAdmin(RUT_ADMIN, CLAVE){
    return this.http.post(this.url + 'loginAdmin', { 
    "RUT_ADMIN": RUT_ADMIN,
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

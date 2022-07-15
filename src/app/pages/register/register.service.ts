import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8201'

  constructor(private  http: HttpClient) { 
    
  }

  postAdmin(ID_ADMIN,ROL_ADMIN,RUT_ADMIN,PNOMBRE,SNOMBRE,PAPELLIDO,SAPELLIDO,EMAIL,CLAVE): Observable<any>{
    return this.http.post<any>(this.url + '/postAdmin',{
        "ID_ADMIN":ID_ADMIN,
        "ROL_ADMIN":ROL_ADMIN,
        "RUT_ADMIN":RUT_ADMIN,
        "PNOMBRE":PNOMBRE,
        "SNOMBRE":SNOMBRE,
        "PAPELLIDO":PAPELLIDO,
        "SAPELLIDO":SAPELLIDO,
        "EMAIL":EMAIL,
        "CLAVE":CLAVE

    });
}

cargarPaises(): Observable<any>{
  return this.http.get(this.url + '/paises')

}

cargarRegion(): Observable<any>{
return this.http.get(this.url + '/regiones')

 }

cargarComuna(): Observable<any>{
  return this.http.get(this.url + '/comunas')

 }

}










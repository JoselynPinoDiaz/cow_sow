import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8201'

  constructor(private  http: HttpClient) { }

  postAdmin(RUT_ADMIN,ROL_ADMIN,PNOMBRE,SNOMBRE,PAPELLIDO,SAPELLIDO,EMAIL,CLAVE,FECHA_NACIMIENTO,COMUNA_ID,REGION_ID,PAIS_ID): Observable<any>{
    return this.http.post<any>(this.url + '/postAdmin',{
        
        "RUT_ADMIN":RUT_ADMIN,
        "ROL_ADMIN":ROL_ADMIN,
        "PNOMBRE":PNOMBRE,
        "SNOMBRE":SNOMBRE,
        "PAPELLIDO":PAPELLIDO,
        "SAPELLIDO":SAPELLIDO,
        "EMAIL":EMAIL,
        "CLAVE":CLAVE,
        "FECHA_NACIMIENTO":FECHA_NACIMIENTO,
        "COMUNA_ID":COMUNA_ID,
        "REGION_ID":REGION_ID,
        "PAIS_ID":PAIS_ID
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










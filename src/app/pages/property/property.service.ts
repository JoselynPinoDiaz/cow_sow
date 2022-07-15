import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

 

  url = 'http://localhost:8201'

  constructor(private  http: HttpClient) { }

  
  getPropiedad(): Observable<any>{
    return this.http.get<any>(this.url+'/GetPropiedad')
  }

  //** Carga de Comunas */
  cargarComuna(): Observable<any>{
    return this.http.get<any>(this.url + '/comunas')
  
   }


  infoPropiedad(ID_PROPIEDAD: string): Observable<any>{
    return this.http.get<any>(this.url+'/GetPropiedad')

  }

  //** CREAR UNA PROPIEDAD */
  postPropiedad(NOMBRE_PROPIEDAD,DIRECCION,HECTAREAS,ID_COMUNA): Observable<any>{
    return this.http.post<any>(this.url + '/postPropiedad',{
      "NOMBRE_PROPIEDAD":NOMBRE_PROPIEDAD,
      "DIRECCION":DIRECCION,
      "HECTAREAS":HECTAREAS,
      "ID_COMUNA":ID_COMUNA
   });
}

  eliminarPropiedad(ID_PROPIEDAD: string): Observable<any>{
    return this.http.delete(this.url+ID_PROPIEDAD)

  }

  


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propi } from '../modelos/propiedad.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  url = 'http://localhost:8201/PROPIEDADES/'

  constructor(private  http: HttpClient) { }

  
  cargarpropiedad(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  agregarPropiedad(propiedad: Propi): Observable<any>{
      return this.http.post<any>(this.url, propiedad)
  }


  infoPropiedad(ID_PROPIEDAD: string): Observable<any>{
    return this.http.get(this.url+ID_PROPIEDAD)

  }

  eliminarPropiedad(ID_PROPIEDAD: string): Observable<any>{
    return this.http.delete(this.url+ID_PROPIEDAD)

  }


}

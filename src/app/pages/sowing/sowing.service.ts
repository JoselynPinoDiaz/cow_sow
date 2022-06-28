import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Siembra } from '../modelos/sowing.interface';

@Injectable({
  providedIn: 'root'
})
export class SowingService {

  url = 'http://localhost:8201/SIEMBRAS/'

  constructor(private  http: HttpClient) { }

  cargarSiembra(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  agregarSiembra(ganado: Siembra): Observable<any>{
      return this.http.post<any>(this.url, ganado)
  }


  infoSiembra(ID_SIEMBRA: string): Observable<any>{
    return this.http.get(this.url)

  }

  eliminarSiembra(ID_SIEMBRA: string): Observable<any>{
    return this.http.delete(this.url+ID_SIEMBRA)

  }

}

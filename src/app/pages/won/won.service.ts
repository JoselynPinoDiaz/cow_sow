import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ganado } from '../modelos/won.interface';

@Injectable({
  providedIn: 'root'
})
export class WonService {

  url = 'http://localhost:8201/ANIMALES/'

  constructor(private  http: HttpClient) { }

  cargarGanado(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  agregarGanado(ganado: Ganado): Observable<any>{
      return this.http.post<any>(this.url, ganado)
  }


  infoGanado(NUMERO_SERIE: string): Observable<any>{
    return this.http.get(this.url+NUMERO_SERIE)

  }

  eliminarGanado(NUMERO_SERIE: string): Observable<any>{
    return this.http.delete(this.url+NUMERO_SERIE)

  }
  
}

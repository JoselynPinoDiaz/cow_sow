import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Ganado } from '../modelos/won.interface';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class WonService {

  url = 'http://localhost:8201/ANIMALES/'

  constructor(private  http: HttpClient) { }

  cargarGanado(): Observable<any>{
    return this.http.get(this.url)

  }

  agregarGanado(ganado: Ganado): Observable<any>{
      return this.http.post(this.url, ganado)
  }


  public async getInfoGanado(){
    const ganado = await this.http.get('http://localhost:8201/ANIMALES/').toPromise();
    return ganado;


  }

  eliminarGanado(_NUMERO_SERIE: string,_NOMBRE: string, _PESO: number ): Observable<any>{
    return this.http.delete(this.url)

  }



  
}

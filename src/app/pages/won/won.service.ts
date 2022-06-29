import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Ganado } from '../modelos/won.interface';


@Injectable({
  providedIn: 'root'
})
export class WonService {

  url: string = 'http://localhost:8201/ANIMALES/'

  constructor(private  http: HttpClient) { }

  cargarGanado(): Observable<any>{
    return this.http.get(this.url)

  }
  agregarGanado(ganado: Ganado): Observable<any>{
      return this.http.post(this.url, ganado)
  }
  getnfoGanado(numero_serie: string): Observable<any>{
    return this.http.get(this.url)

  }
  eliminarGanado(_NUMERO_SERIE: string,_NOMBRE: string, _PESO: number ): Observable<any>{
    return this.http.delete(this.url)

  }

getPosts(){
  return this.http.get(this.url)
}

getPostsById(){}

createPosts(){}

removepostsId(){}

deletePosts(){}


}

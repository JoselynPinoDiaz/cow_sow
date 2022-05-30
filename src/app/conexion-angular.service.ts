import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConexionAngularService {

  constructor(private http: HttpClient) { }

  paises: any [] = [];

  private cargarUsuarios(){
    this.http.get('http://http://localhost:4201/COW_SOW')
    .subscribe( (rep:any[]) =>{
      this.paises = rep;
      console.log(this.paises);

    });
   }
}

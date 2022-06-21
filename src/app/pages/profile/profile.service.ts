import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = 'http://localhost:8201/PERSONAS/'
  url2 = 'http://localhost:8201/TPUSUARIOS/'

  constructor(private  http: HttpClient) { }

  cargarPerfil(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  cargarPerfil1(): Observable<any>{
    return this.http.get<any>(this.url2)

  }
}
  
  
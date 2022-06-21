import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from '../modelos/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:8201/PERSONAS/'

  constructor(private  http: HttpClient) { }

  agregarNuevoUsuario(registro: Registro): Observable<any>{
    return this.http.post<any>(this.url, registro)
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class CONTACTOS {
  _id_contacto: number;
  nombre: string;
  email: string;
  telefono: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoCrudService {



  endpoint = 'http://localhost:8201/CONTACTO';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private httpClient: HttpClient) { }

  createUser(contacto: CONTACTOS): Observable<any> {
    return this.httpClient.post<CONTACTOS>(this.endpoint, JSON.stringify(contacto), this.httpOptions)
      .pipe(
        
      );
  }
  

}

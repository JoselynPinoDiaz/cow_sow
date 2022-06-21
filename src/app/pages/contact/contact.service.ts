import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../modelos/conatcto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  url = 'http://localhost:8201/CONTACTOS/'

  //url = 'http://localhost:8301/getContacto/'

  constructor(private  http: HttpClient) { }

  cargarContactos(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  agregarContacto(contacto: Contacto): Observable<any>{
      return this.http.post<any>(this.url, contacto)
  }


  infoContactos(ID_CONTACTO: string): Observable<any>{
    return this.http.get(this.url+ID_CONTACTO)

  }

  eliminarContacto(ID_CONTACTO: string): Observable<any>{
    return this.http.delete(this.url+ID_CONTACTO)

  }

  
}

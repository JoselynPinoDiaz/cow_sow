import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../modelos/conatcto.interface';
import { Ganado } from '../modelos/won.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  url = 'http://localhost:8201/CONTACTOS/'

  constructor(private  http: HttpClient) { }

  cargarContactos(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  agregarContacto(contacto: Contacto): Observable<any>{
      return this.http.post<any>(this.url, contacto)
  }


  infoContactos(ID_CONTACTO: string){
    return this.http.get<Contacto>(this.url + ID_CONTACTO)
  }

  eliminarContacto(ID_CONTACTO: number): Observable<any>{
    return this.http.delete(this.url+ID_CONTACTO)
  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//nombre del servicio angular
export class ContactoService {

  constructor(private http: HttpClient) { 
  }
    public async cargarContacto(){
      const contactos = await this.http.get('http://localhost:8201/contactos').toPromise();
      return contactos;
   
   }
 

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private  http: HttpClient) { }


  public async contacto(){
    const contacto = await this.http.get('http://localhost:8201/CONTACTOS').toPromise();
    return contacto;
  }

  
}

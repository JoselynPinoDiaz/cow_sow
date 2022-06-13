import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private  http: HttpClient) { }

  public async propiedad(){
    const propiedad = await this.http.get('http://localhost:8201/PROPIEDADES').toPromise();
    return propiedad;
  }
}

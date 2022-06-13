import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private  http: HttpClient) { 
  
  }


  public async perfil(){
    const perfil = await this.http.get('http://localhost:8201/PERSONAS').toPromise();
    return perfil;
  }
}
  
  
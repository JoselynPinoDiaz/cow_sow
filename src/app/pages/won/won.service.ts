import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WonService {

  constructor(private  http: HttpClient) { }


  public async ganados(){
    const ganados = await this.http.get('http://localhost:8201/ANIMALES').toPromise();
    return ganados;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WonService {

  constructor(private  http: HttpClient) { }
  Sganado: any[] = [];

  public  ganados(){
    this.http.get('http://localhost:8201/ANIMALES')
    .subscribe((resp: any[] )=>{
      this.Sganado = resp;
    });
  }
  
  
  //Metodo Listar
  getGanado(){
    return [...this.Sganado]
  } 


 
}



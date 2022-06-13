import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SowingService {

  constructor(private  http: HttpClient) { }


  public async siembra(){
    const siembra = await this.http.get('http://localhost:8201/SIEMBRAS').toPromise();
    return siembra;
  }
}

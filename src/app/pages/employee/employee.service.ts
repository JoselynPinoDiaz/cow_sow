import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private  http: HttpClient) { }

  public async empleado
  
  (){
    const empleado = await this.http.get('http://localhost:8201/TPUSUARIOS').toPromise();
    return empleado;
  }

}

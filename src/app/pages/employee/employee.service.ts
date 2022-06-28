import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../modelos/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8201/TPUSUARIOS/'

  constructor(private http: HttpClient) { }


  cargarEmpleados(): Observable<any>{
    return this.http.get<any>(this.url)

  }

  agregarEmpleado(empleado: Empleado): Observable<any>{
     return this.http.post<any>(this.url, empleado)
  }


  infoEmpleados(ID_TIPO_USUARIO: string): Observable<any>{
    return this.http.get(this.url)

  }

  eliminarEmpleados(ID_TIPO_USUARIO: string): Observable<any>{
    return this.http.delete(this.url+ID_TIPO_USUARIO)

  }
  

}

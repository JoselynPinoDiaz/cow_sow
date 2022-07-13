import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://localhost:8201'

 

  constructor(private http: HttpClient,private router:Router) { }

 //** Metodo GET PROPIEDAD*/
  getPropiedad(): Observable<any>{
    return this.http.get<any>(this.url+'/GetPropiedad')
  }

 //** Metodo GET EMPLEADOS */
getEmpleados(): Observable<any>{
  return this.http.get<any>(this.url + '/getEmpleados')
}

getInfoEmpleados(ID_TIPO_USUARIO: string): Observable<any>{
  return this.http.get(this.url  )
}


  //**Metodo POST AGREGAR EMPLEADO */

postEmpleado(RUT_PERSONA,PNOMBRE,SNOMBRE,PAPELLIDO,SAPELLIDO,FECHA_NACIMIENTO,TIPO_USUARIO,EMAIL,CLAVE,ID_PROPIEDAD){
  return this.http.post<any>(this.url + '/postEmpleado',{
      "RUT_PERSONA":RUT_PERSONA,
      "PNOMBRE":PNOMBRE,
      "SNOMBRE":SNOMBRE,
      "PAPELLIDO":PAPELLIDO,
      "SAPELLIDO":SAPELLIDO,
      "FECHA_NACIMIENTO":FECHA_NACIMIENTO,
      "TIPO_USUARIO":TIPO_USUARIO,
      "EMAIL":EMAIL,
      "CLAVE": CLAVE,
      "ID_PROPIEDAD":ID_PROPIEDAD
     });
  }



  
  editEmpleado(emp: any): Observable<any>{
    return this.http.post(this.url, emp)
  }

 
 



  

}

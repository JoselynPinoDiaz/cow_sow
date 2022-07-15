import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map, retry } from 'rxjs/operators';


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
  return this.http.get(this.url + '/getEmpleados' )
}


  //**Metodo POST AGREGAR EMPLEADO */

postEmpleado(RUT,PNOMBRE,SNOMBRE,PAPELLIDO,SAPELLIDO,ROL_USUARIO,EMAIL,CLAVE,ID_PROPIEDAD){
  return this.http.post<any>(this.url + '/postEmpleado',{

      "RUT":RUT,
      "PNOMBRE":PNOMBRE,
      "SNOMBRE":SNOMBRE,
      "PAPELLIDO":PAPELLIDO,
      "SAPELLIDO":SAPELLIDO,
      "ROL_USUARIO":ROL_USUARIO,
      "EMAIL":EMAIL,
      "CLAVE": CLAVE,
      "ID_PROPIEDAD":ID_PROPIEDAD
     });
  }



  DeletePersona(RUT) {
    const urls = "http://localhost:8201/deleteEmpleado/" + RUT;
    return this.http.delete(urls).pipe(map(data => data));
  }



  
  editEmpleado(emp: any): Observable<any>{
    return this.http.post(this.url, emp)
  }

 
 



  

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppModule } from 'api/src/app/app.module';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  contacto: any = {
    ID_CONTACTO:"",
    NOMBRE: "",
    EMAIL: "",
    TELEFONO: "",
    DESCRIPCION: ""
  }


  
  url = 'http://localhost:8201'

  constructor(private  http: HttpClient) { }

  cargarContactos(): Observable<any>{
    return this.http.get<any>(this.url + '/getContacto', this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handlError)
    )
  }

  ContactosById(id): Observable<any>{
    return this.http.get<any>(this.url + '/getContactoid', this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handlError)
  )
  }

  //** METODO POST AGREGAR CONTACTO */

  crearContacto(NOMBRE,EMAIL,TELEFONO,DESCRIPCION): Observable<any>{
      return this.http.post<any>(this.url + '/postContacto' ,{
	      "NOMBRE": NOMBRE,
	      "EMAIL": EMAIL,
	      "TELEFONO": TELEFONO,
	      "DESCRIPCION": DESCRIPCION
      });
  }


 //** METODO PUT ACTUALIZAR CONTACTO */
 updateContacto(id): Observable<any>{
    return this.http.put<any>(this.url + '/updateContacto/:id', JSON.stringify(id), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handlError)
  )
 }


//** METODO DELETE ELIMINAR CONTACTO */
  deleteContacto(ID_CONTACTO){
    this.contacto = this.http.delete<any>(this.url + '/delete/' + ID_CONTACTO, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handlError)
    )
  }





 




//** Http Options */
httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'applitation/json'
  })
}


/** Handle Api Error */
handlError(error: HttpErrorResponse){
  if (error.error instanceof ErrorEvent){
    //A client-side or network ocurred
    console.error('A Ocurrido un Error:' ,  error.error.message);
  }else{
    //the backend returned an unsuccessful response code
    console.error(
    `Backend return code${error.status}`+
    `Body was: ${error.error}`);
   }
   //Return an Obsevable whith
   return throwError(
     'Something bad >happened; please try again later');
};

  
}

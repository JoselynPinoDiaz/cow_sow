import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { AppModule } from 'api/src/app/app.module';



@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  
  url = 'http://localhost:8201'


  contacto: any = {
    ID_CONTACTO:"",
    NOMBRE: "",
    EMAIL: "",
    TELEFONO: "",
    DESCRIPCION: ""
  }


  headers: HttpHeaders | { [header: string]: string | string[]; };

  constructor(private  http: HttpClient) { }

  cargarContactos(): Observable<any>{
    return this.http.get<any>(this.url + '/getContacto', this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handlError)
    )
  }

  getinfoContacto(): Observable<any>{
    return this.http.get(this.url + '/getContacto')

  }




  ContactosById(ID_CONTACTO): Observable<any>{
    return this.http.get<any>(this.url + '/getContacto' + ID_CONTACTO , this.httpOptions)
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
 
  DeleteUser(ID_CONTACTO) {
    const urls = "http://localhost:8201/deleteContacto/" + ID_CONTACTO;
    return this.http.delete(urls).pipe(map(data => data));
  }



    //TODO:UPDATE USER

    UpdateContacto(NOMBRE: string,EMAIL: string,TELEFONO: number,DESCRIPCION: string) {
      const url = "http://localhost:8201/updateContacto/:id";
  
      return this.http.put(
        url,
        {
          "NOMBRE": NOMBRE,
          "EMAIL": EMAIL,
          "TELEFONO": TELEFONO,
          "DESCRIPCION": DESCRIPCION
  
        },
        { headers: this.headers }
      ).pipe(map(data => data));
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

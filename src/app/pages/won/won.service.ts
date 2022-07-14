import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class WonService {

  url = 'http://localhost:8201'

  

  constructor(private  http: HttpClient) { }


//** METODO GET VISUALIZAR PROPIEDAD */
  cargarPropiedad(): Observable<any>{
    return this.http.get<any>(this.url + '/GetPropiedad')
   }


   //** METODO GET VISUALIZAR EVENTOS */
  cargarEvento(): Observable<any>{
    return this.http.get<any>(this.url + '/getEvento')
  
   }

  
//** METODO GET VISUALIZAR GANADO */
  ObtnerGanado(): Observable<any>{
    return this.http.get<any>(this.url + '/getGanado', this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handlError)
    );
  }
  
  getinfoGanado(NUMERO_SERIE): Observable<any>{
    return this.http.get(this.url)

  }


  //** METODO POST AGREGAR GANADO */
  postGanado(NUMERO_SERIE,TIPO_ANIMAL,RAZA,PESO,ANOS_EDAD,MESES_EDAD,CRIAS,TIPO_PRODUCCION,FECHA,PRECIO_COMPRA,PRECIO_VENTA,VACUNA,PRECIO_VACUNA,ENFERMEDAD,MEDICAMENTO,PRECIO_MEDICAMENTO): Observable<any>{
    return this.http.post<any>(this.url + '/postGanado',{
        "NUMERO_SERIE":NUMERO_SERIE,
        "TIPO_ANIMAL":TIPO_ANIMAL,
        "RAZA":RAZA,
        "PESO":PESO,
        "ANOS_EDAD":ANOS_EDAD,
        "MESES_EDAD":MESES_EDAD,
        "CRIAS":CRIAS,
        "TIPO_PRODUCCION":TIPO_PRODUCCION,
        "FECHA":FECHA,
        "PRECIO_COMPRA":PRECIO_COMPRA,
        "PRECIO_VENTA":PRECIO_VENTA,
        "VACUNA":VACUNA,
        "PRECIO_VACUNA":PRECIO_VACUNA,
        "ENFERMEDAD":ENFERMEDAD,
        "MEDICAMENTO":MEDICAMENTO,
        "PRECIO_MEDICAMENTO":PRECIO_MEDICAMENTO
    });
}



//** METODO DELETE ELIMINAR GANADO */

DeleteGanado(NUMERO_SERIE) {
  const urls = "http://localhost:8201/deleteGanado/" + NUMERO_SERIE;
  return this.http.delete(urls).pipe(map(data => data));
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





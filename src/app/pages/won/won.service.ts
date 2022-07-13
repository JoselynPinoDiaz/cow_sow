import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



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
    return this.http.get<any>(this.url + '/getAnimal');
  }
  
  getinfoGanado(_NUMERO_SERIE): Observable<any>{
    return this.http.get(this.url)

  }


  //** METODO POST AGREGAR GANADO */
  postGanado(NUMERO_SERIE,TIPO_ANIMAL,RAZA,PESO,ANOS_EDAD,MESES_EDAD,CRIAS,TIPO_PRODUCCION,FECHA,PRECIO_COMPRA,PRECIO_VENTA,VACUNA,PRECIO_VACUNA,ENFERMEDAD,MEDICAMENTO,PRECIO_MEDICAMENTO,ID_EVENTO,ID_PROPIEDAD): Observable<any>{
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
        "PRECIO_MEDICAMENTO":PRECIO_MEDICAMENTO,
        "ID_EVENTO":ID_EVENTO,
        "ID_PROPIEDAD":ID_PROPIEDAD
    });
}



//** METODO DELETE ELIMINAR PROPIEDAD */

  eliminarGanado(_NUMERO_SERIE: string,_NOMBRE: string, _PESO: number ): Observable<any>{
    return this.http.delete(this.url)

  }

 

}





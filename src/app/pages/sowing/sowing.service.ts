import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SowingService {

  url = 'http://localhost:8201'

  constructor(private  http: HttpClient) { }

  //** METODO GET VISUALIZAR PROPIEDAD */
  cargarPropiedad(): Observable<any>{
    return this.http.get(this.url + '/GetPropiedad')
   }


   //** METODO GET VISUALIZAR EVENTOS */
  cargarEvento(): Observable<any>{
    return this.http.get(this.url + '/getEvento')
  
   }

  cargarSiembra(): Observable<any>{
    return this.http.get<any>(this.url+'/getSiembra')

  }

  infoSiembra(ID_SIEMBRA: string): Observable<any>{
    return this.http.get(this.url )
  }




//** METODO POST AGREGAR SIEMBRA */
  agregarSiembra(TIPO_SIEMBRA,TIPO_FRU_VER,COLOR,VARIEDAD,CANTIDAD,METROS_OCUPADOS,FECHA,PRECIO_COMPRA,PRECIO_VENTA,FERTILIZANTE,PRECIO_FERTILIZANTE,FUMIGACION,PRECIO_FUMIGACION,ID_EVENTO,ID_PROPIEDAD): Observable<any>{
    return this.http.post<any>(this.url + '/postSiembra',{
      "TIPO_SIEMBRA":TIPO_SIEMBRA,
      "TIPO_FRU_VER":TIPO_FRU_VER,
      "COLOR":COLOR,
      "VARIEDAD":VARIEDAD,
      "CANTIDAD":CANTIDAD,
      "METROS_OCUPADOS":METROS_OCUPADOS,
      "FECHA":FECHA,
      "PRECIO_COMPRA":PRECIO_COMPRA,
      "PRECIO_VENTA":PRECIO_VENTA,
      "FERTILIZANTE":FERTILIZANTE,
      "PRECIO_FERTILIZANTE":PRECIO_FERTILIZANTE,
      "FUMIGACION":FUMIGACION,
      "PRECIO_FUMIGACION":PRECIO_FUMIGACION,
      "ID_EVENTO":ID_EVENTO,
      "ID_PROPIEDAD":ID_PROPIEDAD
    });
}

  eliminarSiembra(ID_SIEMBRA: string): Observable<any>{
    return this.http.delete(this.url+ID_SIEMBRA)

  }

}

/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {
  constructor(private http: HttpClient) {
  }

public async cargarPaises(){
   const paises = await this.http.get('http://localhost:8201/PAISES').toPromise();
   return paises;
}
public async cargarTipUser(){
  const tipoEmpleado = await this.http.get('http://localhost:8201/TPUSUARIOS').toPromise();
  return tipoEmpleado;
}
public async cargarRegion(){
  const region = await this.http.get('http://localhost:8201/regiones').toPromise();
  return region;
}
public async cargarComuna(){
  const comuna = await this.http.get('http://localhost:8201/comunas').toPromise();
  return comuna;
}

///metodo eliminar paises
public async eliminarPaises(){   /// deberia tener de parametro el id del pais
  const paises = await this.http.get('http://localhost:8201/dl_pais').toPromise();
  return paises;

}

/// metodo agregar pais
public async agregarPaises(){ ///deberia tener de parametros los atributos de la tabla
  const paises = await this.http.get('http://localhost:8201/add_pais').toPromise();
  return paises;

}

}

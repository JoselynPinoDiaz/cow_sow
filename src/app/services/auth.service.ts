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

//Metodos get

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
/// Metodos Delete
public async eliminarPaises(idPais: string){   /// deberia tener de parametro el id del pais
  const paises = await this.http.get(`http://localhost:8201/deletePais/${idPais}`).toPromise();
  return paises;
}


/// metodo agregar pais
public async agregarPaises(idPais: string,nombrePais: string,desPais: string){
  ///localhost:8201/add_Pais?parametro1=`${idPais}`&parametro2=`${nombrePais}`&parametro3=`${desPais}`
  const url = `http://localhost:8201/add_Pais?idPais=${idPais}&nombrePais=${nombrePais}&desPais=${desPais}`;
  const paises = await this.http.get(`${url}`).toPromise();
  return paises;
}


}

/// despues de generar el servicio js, se debe conectar con nuestro servicio angular

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
//nombre del servicio angular
export class AuthService {

  constructor(private http: HttpClient ) {
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
 public async cargarContacto(){
  const contacto = await this.http.get('http://localhost:8201/CONTACTOS').toPromise();
  return contacto;
}
public async CargarPerfil(){
  const perfil = await this.http.get('http://localhost:8201/PERSONAS').toPromise();
  return perfil;
}
public async cargarPropiedad(){
  const propiedad = await this.http.get('http://localhost:8201/PROPIEDADES').toPromise();
  return propiedad;
}
public async cargarSiembra(){
  const siembra = await this.http.get('http://localhost:8201/SIEMBRAS').toPromise();
  return siembra;
}
public async cargarAnimales(){
  const ganado = await this.http.get('http://localhost:8201/ANIMALES').toPromise();
  return ganado;
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

 public async agregarcontactos(){ ///deberia tener de parametros los atributos de la tabla
  const contactos = await this.http.get('http://localhost:8201/add_CONTACTO').toPromise();
  return contactos;

}
}

     
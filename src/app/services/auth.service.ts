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
///AGREGAR USER VISTA REGISTER
public async agregarUser(nom: string,pAPEL: string,sAPELLDO: string,eMAIL: string,pASS: string,pAIS: string,cOMUNA: string,rEGION: string){
  //const url = `http://localhost:8201/add_Pais?idPais=${idPais}&nombrePais=${nombrePais}&desPais=${desPais}`;
  const url = `http://localhost:8201/add_userapp`;
  const valor =`?NOMBRE=${nom}&PAPELLIDO=${pAPEL}&SAPELLDO=${sAPELLDO}&EMAIL=${eMAIL}` ;
  const valor2 = `&PASS=${pASS}&PAIS=${pAIS}&COMUNA=${cOMUNA}&REGION=${rEGION}`;
  const usrlcomplet = `${url}` +`${valor}` +`${valor2}` ;
  const users = await this.http.get(`${usrlcomplet}`).toPromise();
  return users;
}
//mostrar perfil
public async verperfil(nom: string,pAPEL: string,sAPELLDO: string,eMAIL: string,pASS: string,pAIS: string,cOMUNA: string,rEGION: string){
  //const url = `http://localhost:8201/add_Pais?idPais=${idPais}&nombrePais=${nombrePais}&desPais=${desPais}`;
  const url = `http://localhost:8201/add_userapp`;
  const valor =`?NOMBRE=${nom}&PAPELLIDO=${pAPEL}&SAPELLDO=${sAPELLDO}&EMAIL=${eMAIL}` ;
  const valor2 = `&PASS=${pASS}&PAIS=${pAIS}&COMUNA=${cOMUNA}&REGION=${rEGION}`;
  const usrlcomplet = `${url}` +`${valor}` +`${valor2}` ;
  const users = await this.http.get(`${usrlcomplet}`).toPromise();
  return users;
}
}

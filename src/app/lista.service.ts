import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  public lista: any[] = []; // Almacena la lista de contactos

  constructor() { }


  /**
   * @function crearLista
   * @description Funcion que Guarda en el arreglo de listas un nuevo objeto o una nueva lista a partir del nombre de la lista
   * @param {string} nombreLista el nombre de la lista
   */

  crearLista (contacto: string){
    let ObjetoLista = {
      nombre: String,
      pApellido: String,
      sApellido: String,
      email: String,
      telefono: Number

    };
    this.lista.push(ObjetoLista);
    this.GuardarStorage();
  }

  /**
   * @function GuardarStorage
   * @description Funcion que Guarda en el localStorage las listas
   */

  GuardarStorage(){

   let stringListas: string = JSON.stringify(this.lista);


    localStorage.setItem('lista', stringListas)

  }

}

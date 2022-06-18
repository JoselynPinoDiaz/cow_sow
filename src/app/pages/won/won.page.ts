import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service'; 


@Component({
  selector: 'app-won',
  templateUrl: './won.page.html',
  styleUrls: ['./won.page.scss'],
  
})


export class WonPage implements OnInit {

  public numero: any;
  public nombre: any;
  public tipo_ganado: any;
  public tipo_produccion: any;
  public sexo: any;

  constructor(public Swon: AuthService, private http: HttpClient) {   
  }

  public async obtenerPaises() {
  }


//Metodo Listar
  async getGanado(){ 
    const ganados = await this.Swon.cargarAnimales();
    this.numero = ganados[0].NUMERO_SERIE,
    this.nombre = ganados[0].NOMBRE_ANIMAL,
    this.tipo_ganado = ganados[0].NOMBRE_TIPO_ANIMAL,
    this.tipo_produccion = ganados[0].TIPO_PROD_ANIMAL,
    this.sexo = ganados[0].SEXO
   }
 

  async ngOnInit() {
  
  }

  

  

}

//* asi lo estaba llamando antes pero con el boton 

//**export class WonPage implements OnInit { */
//**  public numero_serie: number;
  //** public nombre: string;
  //** public tipo_ganado: string;
  //** public tipo_produccion: string;
  //** public sexo: string;
  
  //**constructor(public Swon: WonService) { }

  //**ngOnInit() {}

  //** async ganado(){
    //** const ganados = await this.Swon.ganados();
    //** this.numero_serie = ganados[0].NUMERO_SERIE;
    //** this.nombre = ganados[0].NOMBRE_ANIMAL;
    //** this.tipo_ganado = ganados[0].NOMBRE_TIPO_ANIMAL;
    //** this.tipo_produccion = ganados[0].TIPO_PROD_ANIMAL;
    //** this.sexo = ganados[0].SEXO;

  //** }
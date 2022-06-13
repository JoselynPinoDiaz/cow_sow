import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProfileService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public rut: number;
  public nombre: string;
  public email: string;
  public telefono: string;
  public fecha_nacimiento: string;
  public tipo_usuario: string;
  public direccion: string;
  public tipo_direccion: string;
  public comuna: string;
  public region: string;
  public pais: string;
  public descripcionTP: string;
  public descripcionCO: string;


  constructor(public Sprofile: ProfileService) { 
    //this.ProfileService.perfil();
  }
      
  ngOnInit() {
  }

  async perfil(){
    const perfiles = await this.Sprofile.perfil();
    this.rut = perfiles[0].RUT;
    this.nombre = perfiles[0].NOMBRE;
    this.email = perfiles[0].EMAIL;
    this.telefono = perfiles[0].TELEFONO;
    this.fecha_nacimiento = perfiles[0].FECHA_NACIMIENTO;
    this.tipo_usuario = perfiles[0].TIPO_USUARIO;
    this.direccion = perfiles[0].DIRECCION;
    this.tipo_direccion = perfiles[0].TIPO_DIRECCION;
    this.comuna = perfiles[0].NOMBRE_COMUNA;
    this.region = perfiles[0].NOMBRE_REGION;
    this.pais = perfiles[0].NOMBRE_PAIS;
    this.descripcionTP = perfiles[0].DESCRIPCION;
    this.descripcionCO = perfiles[0].DESCRIPCION_1;
  
  }
}

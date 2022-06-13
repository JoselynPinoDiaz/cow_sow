import { Component, OnInit } from '@angular/core';
import { SowingService } from './sowing.service';

@Component({
  selector: 'app-sowing',
  templateUrl: './sowing.page.html',
  styleUrls: ['./sowing.page.scss'],
})
export class SowingPage implements OnInit {

  public tipo_siembra: string;
  public tipo_produccion: string;
  public nombre_siembra: string;
  public cantidad_siembra: string;
  public descripcion: string;

  constructor(public Ssowing: SowingService) { }

  ngOnInit() {
  }

  async siembra(){
    const siembras = await this.Ssowing.siembra();
    this.tipo_siembra = siembras[0].TIPO_SIEMBRA;
    this.nombre_siembra = siembras[0].NOMBRE_SIEMBRA;
    this.cantidad_siembra = siembras[0].CANTIDAD_SIEMBRA;
    this.descripcion = siembras[0].DESCRIPCION;

}
}
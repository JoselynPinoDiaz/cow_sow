import { Component, OnInit } from '@angular/core';
import { PropertyService } from './property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  public nombre_propiedad: string;
  public tipo_produccion: string;
  public pais: string;
  public comuna: string;
  public region: string;
  public direccion: string;
  public domicilio: string;
  public hectarea: string;
  
  


  constructor(public Sproperty: PropertyService) { }

  ngOnInit() {
  }

  async propiedad(){
    const propiedades = await this.Sproperty.propiedad();
    this.nombre_propiedad = propiedades[0].NOMBRE_PROPIEDAD;
    this.tipo_produccion = propiedades[0].TIPO_PRODUCCION;
    this.pais = propiedades[0].NOMBRE_PAIS;
    this.comuna = propiedades[0].NOMBRE_COMUNA;
    this.region = propiedades[0].NOMBRE_REGION;
    this.direccion = propiedades[0].DIRECCION;
    this.domicilio = propiedades[0].DOMICILIO;
    this.hectarea = propiedades[0].CANTIDAD_HECTARIAS;
    

  
  }

}
//SELECT P.NOMBRE_PROPIEDAD,P.CANTIDAD_HECTARIAS,TP.TIPO_PRODUCCION,DO.DIRECCION||' '||NUMERO AS DIRECCION,TIPO_DIRECCION AS DOMICILIO,CO.NOMBRE_COMUNA,RE.NOMBRE_REGION,PA.NOMBRE_PAIS, TP.DESCRIPCION FROM PROPIEDAD P JOIN TIPO_PRODUCCION TP ON P.ID_TIPO_PRODUCCION = TP.ID_TIPO_PRODUCCION JOIN DOMICILIO DO ON DO.ID_DOMICILIO = P.ID_DOMICILIO JOIN COMUNA CO ON CO.ID_COMUNA = CO.ID_COMUNA JOIN REGION RE ON RE.ID_REGION = CO.ID_REGION JOIN PAIS PA ON PA.ID_PAIS = RE.ID_PAIS

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleWonPageRoutingModule } from './detalle-won-routing.module';

import { DetalleWonPage } from './detalle-won.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleWonPageRoutingModule
  ],
  declarations: [DetalleWonPage]
})
export class DetalleWonPageModule {}

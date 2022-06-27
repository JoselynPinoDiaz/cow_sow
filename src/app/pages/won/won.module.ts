import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WonPageRoutingModule } from './won-routing.module';

import { WonPage } from './won.page';
import { DetalleWonPage } from './detalle-won/detalle-won.page';
import { DetalleWonPageModule } from './detalle-won/detalle-won.module';

@NgModule({
  entryComponents: [
DetalleWonPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WonPageRoutingModule,
    DetalleWonPageModule
  ],
  declarations: [WonPage]
})
export class WonPageModule {}

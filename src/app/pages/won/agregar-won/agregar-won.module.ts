import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarWonPageRoutingModule } from './agregar-won-routing.module';

import { AgregarWonPage } from './agregar-won.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarWonPageRoutingModule
  ],
  declarations: [AgregarWonPage]
})
export class AgregarWonPageModule {}

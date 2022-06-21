import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarContactosPageRoutingModule } from './agregar-contactos-routing.module';

import { AgregarContactosPage } from './agregar-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarContactosPageRoutingModule
  ],
  declarations: [AgregarContactosPage]
})
export class AgregarContactosPageModule {}

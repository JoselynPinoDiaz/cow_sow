import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSowingPageRoutingModule } from './agregar-sowing-routing.module';

import { AgregarSowingPage } from './agregar-sowing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSowingPageRoutingModule
  ],
  declarations: [AgregarSowingPage]
})
export class AgregarSowingPageModule {}

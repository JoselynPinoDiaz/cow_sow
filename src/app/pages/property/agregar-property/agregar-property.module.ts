import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPropertyPageRoutingModule } from './agregar-property-routing.module';

import { AgregarPropertyPage } from './agregar-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPropertyPageRoutingModule
  ],
  declarations: [AgregarPropertyPage]
})
export class AgregarPropertyPageModule {}

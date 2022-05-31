import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinaryPageRoutingModule } from './veterinary-routing.module';

import { VeterinaryPage } from './veterinary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinaryPageRoutingModule
  ],
  declarations: [VeterinaryPage]
})
export class VeterinaryPageModule {}

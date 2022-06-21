import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSowingPageRoutingModule } from './detalle-sowing-routing.module';

import { DetalleSowingPage } from './detalle-sowing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSowingPageRoutingModule
  ],
  declarations: [DetalleSowingPage]
})
export class DetalleSowingPageModule {}

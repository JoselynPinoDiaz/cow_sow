import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProprertyPageRoutingModule } from './detalle-proprerty-routing.module';

import { DetalleProprertyPage } from './detalle-proprerty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProprertyPageRoutingModule
  ],
  declarations: [DetalleProprertyPage]
})
export class DetalleProprertyPageModule {}

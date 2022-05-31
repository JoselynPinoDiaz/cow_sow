import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DutyManagerrPageRoutingModule } from './duty-managerr-routing.module';

import { DutyManagerrPage } from './duty-managerr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DutyManagerrPageRoutingModule
  ],
  declarations: [DutyManagerrPage]
})
export class DutyManagerrPageModule {}

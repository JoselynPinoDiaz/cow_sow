import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SowingPageRoutingModule } from './sowing-routing.module';

import { SowingPage } from './sowing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SowingPageRoutingModule
  ],
  declarations: [SowingPage]
})
export class SowingPageModule {}

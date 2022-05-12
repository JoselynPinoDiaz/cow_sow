import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WonPageRoutingModule } from './won-routing.module';

import { WonPage } from './won.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WonPageRoutingModule
  ],
  declarations: [WonPage]
})
export class WonPageModule {}

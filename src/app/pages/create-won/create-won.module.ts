import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWonPageRoutingModule } from './create-won-routing.module';

import { CreateWonPage } from './create-won.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateWonPageRoutingModule
  ],
  declarations: [CreateWonPage]
})
export class CreateWonPageModule {}

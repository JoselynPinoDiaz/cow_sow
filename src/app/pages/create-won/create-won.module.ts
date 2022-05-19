import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateWonPageRoutingModule } from './create-won-routing.module';

import { CreateWonPage } from './create-won.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateWonPageRoutingModule
  ],
  declarations: [CreateWonPage]
})
export class CreateWonPageModule {}

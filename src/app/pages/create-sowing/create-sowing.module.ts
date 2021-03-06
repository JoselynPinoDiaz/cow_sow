import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateSowingPageRoutingModule } from './create-sowing-routing.module';

import { CreateSowingPage } from './create-sowing.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateSowingPageRoutingModule
  ],
  declarations: [CreateSowingPage]
})
export class CreateSowingPageModule {}

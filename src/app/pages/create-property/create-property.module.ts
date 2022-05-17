import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePropertyPageRoutingModule } from './create-property-routing.module';

import { CreatePropertyPage } from './create-property.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreatePropertyPageRoutingModule
  ],
  declarations: [CreatePropertyPage]
})
export class CreatePropertyPageModule {}

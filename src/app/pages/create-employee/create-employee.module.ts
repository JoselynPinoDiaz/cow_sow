import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEmployeePageRoutingModule } from './create-employee-routing.module';

import { CreateEmployeePage } from './create-employee.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateEmployeePageRoutingModule
  ],
  declarations: [CreateEmployeePage]
})
export class CreateEmployeePageModule {}

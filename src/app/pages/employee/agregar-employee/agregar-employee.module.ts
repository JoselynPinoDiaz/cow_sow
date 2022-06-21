import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEmployeePageRoutingModule } from './agregar-employee-routing.module';

import { AgregarEmployeePage } from './agregar-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEmployeePageRoutingModule
  ],
  declarations: [AgregarEmployeePage]
})
export class AgregarEmployeePageModule {}

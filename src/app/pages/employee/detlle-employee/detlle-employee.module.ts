import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetlleEmployeePageRoutingModule } from './detlle-employee-routing.module';

import { DetlleEmployeePage } from './detlle-employee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetlleEmployeePageRoutingModule
  ],
  declarations: [DetlleEmployeePage]
})
export class DetlleEmployeePageModule {}

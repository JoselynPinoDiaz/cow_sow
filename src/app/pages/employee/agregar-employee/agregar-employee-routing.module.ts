import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEmployeePage } from './agregar-employee.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEmployeePageRoutingModule {}

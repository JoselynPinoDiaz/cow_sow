import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetlleEmployeePage } from './detlle-employee.page';

const routes: Routes = [
  {
    path: '',
    component: DetlleEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetlleEmployeePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeePage } from './employee.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeePage
  },
  {
    path: 'detlle-employee',
    loadChildren: () => import('./detlle-employee/detlle-employee.module').then( m => m.DetlleEmployeePageModule)
  },
  {
    path: 'agregar-employee',
    loadChildren: () => import('./agregar-employee/agregar-employee.module').then( m => m.AgregarEmployeePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeePageRoutingModule {}

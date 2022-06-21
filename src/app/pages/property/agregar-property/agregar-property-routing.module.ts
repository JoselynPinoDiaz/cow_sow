import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPropertyPage } from './agregar-property.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPropertyPageRoutingModule {}

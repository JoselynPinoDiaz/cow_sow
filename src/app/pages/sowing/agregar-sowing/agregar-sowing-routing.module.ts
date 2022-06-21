import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarSowingPage } from './agregar-sowing.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarSowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSowingPageRoutingModule {}

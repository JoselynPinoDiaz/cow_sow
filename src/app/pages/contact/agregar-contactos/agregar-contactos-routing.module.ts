import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarContactosPage } from './agregar-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarContactosPageRoutingModule {}

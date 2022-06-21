import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarWonPage } from './agregar-won.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarWonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarWonPageRoutingModule {}

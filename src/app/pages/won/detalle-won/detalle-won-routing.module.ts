import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleWonPage } from './detalle-won.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleWonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleWonPageRoutingModule {}

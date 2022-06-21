import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProprertyPage } from './detalle-proprerty.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProprertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProprertyPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSowingPage } from './detalle-sowing.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSowingPageRoutingModule {}

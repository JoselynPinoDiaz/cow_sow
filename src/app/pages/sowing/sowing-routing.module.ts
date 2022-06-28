import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SowingPage } from './sowing.page';

const routes: Routes = [
  {
    path: '',
    component: SowingPage
  },
  {
    path: 'detalle-sowing',
    loadChildren: () => import('./detalle-sowing/detalle-sowing.module').then( m => m.DetalleSowingPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SowingPageRoutingModule {}

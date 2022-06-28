import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WonPage } from './won.page';

const routes: Routes = [
  {
    path: '',
    component: WonPage
  },
  {
    path: ':numero_serie',
    loadChildren: () => import('./detalle-won/detalle-won.module').then( m => m.DetalleWonPageModule)
  },
  {
    path: 'agregar-won',
    loadChildren: () => import('./agregar-won/agregar-won.module').then( m => m.AgregarWonPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WonPageRoutingModule {}

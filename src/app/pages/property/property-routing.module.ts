import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyPage } from './property.page';

const routes: Routes = [
  {
    path: '',
    component: PropertyPage
  },
  {
    path: 'detalle-proprerty',
    loadChildren: () => import('./detalle-proprerty/detalle-proprerty.module').then( m => m.DetalleProprertyPageModule)
  },
  {
    path: 'agregar-granja',
    loadChildren: () => import('./agregar-property/agregar-property.module').then( m => m.AgregarPropertyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyPageRoutingModule {}

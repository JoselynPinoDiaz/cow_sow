import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: '',
    component: ContactPage
  },  {
    path: 'agregar-contactos',
    loadChildren: () => import('./agregar-contactos/agregar-contactos.module').then( m => m.AgregarContactosPageModule)
  },
  {
    path: 'detalle-contacto',
    loadChildren: () => import('./detalle-contacto/detalle-contacto.module').then( m => m.DetalleContactoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}

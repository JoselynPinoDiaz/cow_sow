import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateWonPage } from './create-won.page';

const routes: Routes = [
  {
    path: '',
    component: CreateWonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateWonPageRoutingModule {}

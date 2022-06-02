import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateSowingPage } from './create-sowing.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateSowingPageRoutingModule {}

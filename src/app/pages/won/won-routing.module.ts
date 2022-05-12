import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WonPage } from './won.page';

const routes: Routes = [
  {
    path: '',
    component: WonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WonPageRoutingModule {}

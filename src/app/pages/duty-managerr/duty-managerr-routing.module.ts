import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DutyManagerrPage } from './duty-managerr.page';

const routes: Routes = [
  {
    path: '',
    component: DutyManagerrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DutyManagerrPageRoutingModule {}

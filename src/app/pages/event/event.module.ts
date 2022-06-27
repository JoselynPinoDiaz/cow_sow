import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventPageRoutingModule } from './event-routing.module';

import { EventPage } from './event.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPage
      }
    ]),
    NgCalendarModule
  ],
  declarations: [EventPage]
})
export class EventPageModule {}

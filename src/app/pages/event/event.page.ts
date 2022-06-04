import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  modes = ['Dia', 'date-time', 'Mes', 'month-year', 'Tiempo', 'tiempo-date', 'Año'];
  selecteMode = 'date';

  constructor() { }

  ngOnInit() {
  }

}

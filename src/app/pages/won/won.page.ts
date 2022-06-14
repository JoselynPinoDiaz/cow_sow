import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WonService } from './won.service';

@Component({
  selector: 'app-won',
  templateUrl: './won.page.html',
  styleUrls: ['./won.page.scss'],
})
export class WonPage implements OnInit {

public  ganados = []


  constructor(public Swon: WonService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ganados = this.Swon.getGanado()
    
  }

}

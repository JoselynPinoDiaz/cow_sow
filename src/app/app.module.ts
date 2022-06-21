import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//se importa para la api rest
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { EventPageModule } from './pages/event/event.module'; 


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, EventPageModule],  // se agrega HttpClientModule
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {

 // countryData : any[];
 // country : any;
//countrySelected: any;


}



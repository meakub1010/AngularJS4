import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Simulate the web API

// register app-wide service untill you have server for API

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroSearchComponent }  from './hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
  // imports - these are the modules whose export classes are required in this module 
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  // declarations - contain the view classes that belong to this module
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  // providers - creates services that eventually become accessible in all parts of the application
  providers:[ HeroService ],
  // bootstrap - main application view call the root component. ONLY the ROUTE MODULE SHOULD SET this bootstrap property.
  bootstrap: [ AppComponent ] // this it the root component that angular creates and inserts in index.html
})


export class AppModule { 

}

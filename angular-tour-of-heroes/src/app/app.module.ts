import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent }  from './app.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
                {
                  path: 'heroes',
                  component: HeroesComponent
                },
                {
                  path: 'dashboard',
                  component: DashboardComponent
                },
                {
                  path: 'detail/:id',
                  component: HeroDetailComponent
                },
                {
                  path: '',
                  redirectTo: '/dashboard',
                  pathMatch: 'full'
                },
            ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  providers:[ HeroService ],
  bootstrap: [ AppComponent ]
})



export class AppModule { 

}

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActivate="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active" >Heroes</a>
            <a routerLink="/items" routerLinkActive="active" >Items</a>
        </nav>
        <p myHighlight> Colored text through directive !! </p>
        <router-outlet></router-outlet>


    `
})

export class AppComponent{

    title = "Tour of Heroes"
}
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
        <h4>Pick a highlight color</h4>
        <div>
            <input type="radio" name="colors" (click)="color='lightgreen'">Green
            <input type="radio" name="colors" (click)="color='magenta'">Magenta
            <input type="radio" name="colors" (click)="color='cyan'">Cyan
        </div>
        
        <p [myHighlight]="color">Highlight me! No defualt color; fall back to red </p>
        

        <p [myHighlight]="color" defaultColor="violet">
            Highlight me too! Default color is Violet !!!
        </p>

        <router-outlet></router-outlet>


    `
})

export class AppComponent{

    title = "Tour of Heroes"
    color: string;
}
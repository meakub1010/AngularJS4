import { Component, Input, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


import { Items } from './hero.service';
import { CURRENTITEMS } from "./mock-heroes";
import { Item } from "./hero";

@Component({
    selector: 'hero-list-basic',
  template: `
    <ul>
      <li *ngFor="let item of items"
          [@heroState]="item.state"
          (click)="item.toggleState()">
        {{item.name}}
      </li>
    </ul>
  `,
  styles: [`
    ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  width: 120px;
  line-height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
}

.active {
  background-color: #cfd8dc;
  transform: scale(1.1);
}
.inactive {
  background-color: #eee;
  transform: scale(1);
}

  `],
  animations: [
      trigger('heroState',[
            state('inactive', style({
                                backgroundColor: '#eee',
                                transform: 'scale(1)'
            })),
            state('active', style({
                                backgroundColor: '#cfd8dc',
                                transform: 'scale(1.1)'
            })),

            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
      ])
  ]

})

export class ItemListBasicComponent implements OnInit {
        ngOnInit(): void {
            this.items = CURRENTITEMS;
        }


    items: Item[];
}
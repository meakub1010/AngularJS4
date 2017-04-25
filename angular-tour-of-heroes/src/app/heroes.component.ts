import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    providers:[HeroService],
    styles:  [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class HeroesComponent implements OnInit {
  
  constructor(
    private router: Router,
    private heroService: HeroService
  
  ) { }

  heroes : Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  getHeroes(): void {
    // line below is used to receive heroes from service instanteneously with no delay on remote server end. 
    //this.heroes = this.heroService.getHeroes();

    // PROMISE based reponse receive and callback

    this.heroService.getHeroes().then(heroes => this.heroes = heroes);

  };
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
    .then( hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
  }

  ngOnInit(): void {
    this.getHeroes()
  }
  
} 


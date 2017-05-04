import { Injectable, OnInit } from '@angular/core';
import { Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Hero, Item } from './hero';
import { HEROES, CURRENTITEMS } from './mock-heroes';

@Injectable()
export class HeroService {
    
    // method below return immediately. no promise of callback in case of delay getting the list of heroes from remote server.
    /*
    getHeroes(): Hero[] {
        return HEROES;
    }
*/
    // update getHeroes service method to convert it to be compatible with asynchronous 
    // hence we need to implement Promise.
    // Promise meaning - promise to a callback

    // resolved with mock data
     /*
     getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
*/
    // modified version of getHeroes() to fetch data through HTTP
    private heroesUrl = 'api/heroes';

    constructor(private http: Http){
        
    }

    getHeroes(): Promise<Hero[]>{
            return this.http.get(this.heroesUrl)
                       .toPromise()
                       .then(response => response.json().data as Hero[])
                       .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    } 


    // HTTP getHeroes() ends here
/*
    getHero(id: number): Promise<Hero> {

        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }
*/

    // HTTP version of getHero(id: number): Promise<Hero>  starts here 

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        
        return this.http.get(url)
                   .toPromise()
                   .then(response => response.json().data as Hero)
                   .catch(this.handleError); // handle error defined earlier
    }

    // HTTP version of getHero(id: number): Promise<Hero>  ends here 

    // UPDATE 

    private headers = new Headers({'Content-Type':'application/json'}); // must import headers from http module

    update(hero: Hero): Promise<Hero>{
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }

    create(name: string): Promise<Hero>{
        return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError)
    }


    delete(id: number): Promise<void>{
        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }


}

@Injectable()
export class Items implements Iterable<Item>{
    currentItems: Item[] = [];

  [Symbol.iterator]() {
    return this.currentItems.values();
  }

  canAdd() {
return this.currentItems.length < CURRENTITEMS.length;
  }

  canRemove() {
    return this.currentItems.length > 0;
  }

  addActive() {
    let item = CURRENTITEMS[this.currentItems.length];
    item.state = 'active';
    this.currentItems.push(item);
  }

  addInactive() {
    let item = CURRENTITEMS[this.currentItems.length];
    item.state = 'inactive';
    this.currentItems.push(item);
  }

  remove() {
    this.currentItems.splice(this.currentItems.length - 1, 1);
  }

}
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


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

     getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
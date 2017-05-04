import { Hero, Item } from './hero'; // import Hero bkz HEROES constant use Hero class

// export the heroes constant so it can be imported
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export const CURRENTITEMS: Item[] = [
    new Item ('Mr. Nice','inactive'),
    new Item ('Narco' , 'inactive'),
    new Item ('Bombasto','inactive'),
    new Item ('Celeritas', 'inactive'),
    new Item ('Magneta' ,'inactive'),
    new Item ('RubberMan' ,'inactive'),
    new Item ('Dynama' , 'inactive'),
    new Item ('Dr IQ' ,'inactive' ),
    new Item ('Magma' ,'inactive' ),
    new Item ('Tornado','inactive')
];
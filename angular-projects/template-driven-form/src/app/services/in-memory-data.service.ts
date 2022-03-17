import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
        { id: 1, name: 'Batman', power: 'Super Rich', alterEgo: 'Bruce Wayne' },
        { id: 2, name: 'Superman', power: 'Super Strong', alterEgo: 'Clark Kent' },
        { id: 3, name: 'Aquaman', power: 'Super Fish', alterEgo: 'Forgot The Name' },
        { id: 4, name: 'Wonderwoman', power: 'Super Sexy', alterEgo: 'Dianna Prince' },
        { id: 5, name: 'Commander Bawang', power: 'Super Scent', alterEgo: 'Herbert Bautista' },
        { id: 6, name: 'Captain Barbel', power: 'Super Strong', alterEgo: 'Edu Manzano' },
        { id: 7, name: 'Lastikman', power: 'Super Flexible', alterEgo: 'Vhong Navaro' },
        { id: 8, name: 'Super Inggo', power: 'Super Fast', alterEgo: 'I don No' },
        { id: 9, name: 'Captain America', power: 'Super Agile', alterEgo: 'Steve Rogers' },
        { id: 10, name: 'Ironman', power: 'Super Hard', alterEgo: 'Tony Stark' }
    ];
  // TODO: Why is this {heroes}
  return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

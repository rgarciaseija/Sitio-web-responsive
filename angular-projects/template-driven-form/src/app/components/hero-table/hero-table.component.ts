import { HeroService } from './../../services/hero.service';
import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HEROES } from 'src/app/_mock-data/mock-heroes';
import { Hero } from 'src/app/model/hero';


@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent {

  @Output() selectedHero : EventEmitter<Hero> = new EventEmitter();
  @Input() newHero? : Hero;
  @Input() heroes? : Hero[];

  // for now, let's use or
  // mock-up HEROES data
  // heroes : Hero[] = [];
  // selectedHero? : Hero;

  constructor(private heroService: HeroService) { }

  onClick(hero: Hero) {
    // this will emit the selected hero
    this.selectedHero.emit(hero);
  }

}

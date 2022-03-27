import { ActivatedRoute } from '@angular/router';
import { HeroService } from './../../services/hero.service';
import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/model/hero';

// angular animations
import { animate, transition } from '@angular/animations';


@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  @Output() selectedHero : EventEmitter<Hero> = new EventEmitter();
  @Output() deletedHero : EventEmitter<Hero> = new EventEmitter();
  newHeroId? : number;

  heroes : Hero[] = [];

  constructor(private heroService: HeroService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    if(id) {
      this.newHeroId = id;
    }
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHereos().subscribe(heroes => this.heroes = heroes);
  }

  onClick(hero: Hero) {
    // this will emit the selected hero
    this.selectedHero.emit(hero);
  }

  onDelete(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe();
    // get updated list of heroes
    //  after deleting
    this.getHeroes();
  }

}

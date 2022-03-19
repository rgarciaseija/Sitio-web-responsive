import { HeroService } from './services/hero.service';
import { Router } from '@angular/router';
import { Hero } from './model/hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'template-driven-form';

  heroes : Hero[] = [];
  newHero? : Hero;
  selectedHeroFile? : Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
    ) { }


  ngOnInit(): void {
    this.getHeroes();
  }

  updateHeroTable(hero: Hero) {
    this.newHero = hero;
    this.addHero(hero);
    this.getHeroes();
  }

  selectedHero(heroFile : Hero) {
    this.selectedHeroFile = heroFile;
  }

  addHero(hero: Hero) {
    // generate and id for our new hero
    hero.id = this.heroService.genId(this.heroes);
    // add the new hero to our repository
    this.heroService.addHero(hero).subscribe();
  }

  getHeroes() {
    // get all heroes
    this.heroService.getHereos().subscribe(h=>this.heroes=h);
  }
}

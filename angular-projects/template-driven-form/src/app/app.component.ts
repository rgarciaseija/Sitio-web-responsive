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

  send(hero: Hero) {
    this.newHero = hero;
    console.log(this.newHero);
    this.add(hero);
    this.getHeroes();
    // this.router.navigate(['heroes']);//redirects url to new
  }

  selectedHero(heroFile : Hero) {
    this.selectedHeroFile = heroFile;
    console.log(this.selectedHeroFile);
  }

  add(hero: Hero) {
    hero.id = this.heroService.genId(this.heroes);
    this.heroService.addHero(hero).subscribe();
  }

  getHeroes() {
    this.heroService.getHereos().subscribe(h=>this.heroes=h);
  }
}

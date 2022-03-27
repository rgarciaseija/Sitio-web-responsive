import { HeroService } from './services/hero.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  deletedHeroFile? : Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      console.log(params['id']);
    });

    this.getHeroes();
  }

  updateHeroTable(hero: Hero) {
    this.newHero = hero;
    this.addHero(hero);
    this.getHeroes();
  }

  selectedHero(heroFile : Hero) {
    this.selectedHeroFile = heroFile;
    // this.getHero();
    // console.log(this.selectedHeroFile);
  }

  deletedHero(heroFile : Hero) {
    this.deletedHeroFile = heroFile;
    // console.log(this.deletedHeroFile);
    this.heroService.deleteHero(heroFile).subscribe();
    this.getHeroes();
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
  // }

  // getHero() {
  //   const heroId = parseInt(this.route.snapshot.paramMap.get('id')!);
  //   this.heroService.getHeroByID(heroId).subscribe(hero => this.selectedHeroFile = hero);
  //   console.log((this.selectedHeroFile));

  }
}

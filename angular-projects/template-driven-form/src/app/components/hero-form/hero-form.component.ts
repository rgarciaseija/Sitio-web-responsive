import { HeroService } from './../../services/hero.service';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Hero } from './../../model/hero';
import { ActivatedRoute, Router } from '@angular/router';


// this decorator tells angular
// that this is a component
// and some metadata
@Component({
  // means that you can drop this component
  // on a parent template using <app-hero-form>
  selector: 'app-hero-form',
  // this points to the html (or view)
  // component of this component
  templateUrl: './hero-form.component.html',
  // this points to the css to be used
  styleUrls: ['./hero-form.component.css']
})
// here, export meanst that you can import this
// class from other files
export class HeroFormComponent implements OnInit {
  // array of powers
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // create new hero instance
  // using the first hero on our mock data
  model = new Hero(0, '', '', '');

  submitted = false;

  id? : number | null;
  constructor(private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    if(id) {
      this.getHero(id);
    }
  }

  onSubmit() {
    this.submitted = true
    this.addHero(this.model);
  }

  addHero(hero: Hero) {
    // generate and id for our new hero
    hero.id = this.heroService.genId();
    // add the new hero to our repository
    this.heroService.addHero(hero).subscribe();
    this.route.navigateByUrl(`/heroes/${hero.id}`);
  }

  getHero(id: number) {
    this.heroService.getHeroByID(id).subscribe(hero=>this.model=hero);
  }
}

import { HeroService } from './../../services/hero.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Hero } from './../../model/hero';
import { Router } from '@angular/router';

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
export class HeroFormComponent {

  @Output() redirect:EventEmitter<Hero> =new EventEmitter();

  // array of powers
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // create new hero instance
  // using the first hero on our mock data
  model = new Hero(0, '', '', '');

  submitted = false;

  constructor(private heroService: HeroService, private router: Router) { }

  onSubmit() {
    this.submitted = true
    this.redirect.emit(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}

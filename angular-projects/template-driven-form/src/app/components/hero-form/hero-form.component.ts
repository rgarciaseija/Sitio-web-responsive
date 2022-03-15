import { Component, OnInit } from '@angular/core';
import { Hero } from './../../model/hero';

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

  // array of powers
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // create new hero instance
  model = new Hero(18, 'Dr. Brainless', this.powers[0], 'Chunk Overstreet');

  submitted = false;

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}

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

  @Output() redirect:EventEmitter<Hero> =new EventEmitter();
  @Input() selectedHero? :  Hero | null = null;

  // array of powers
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  // create new hero instance
  // using the first hero on our mock data
  model = new Hero(0, '', '', '');

  submitted = false;

  id? : number | null;
  constructor(private heroService: HeroService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true
    this.redirect.emit(this.model);
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}

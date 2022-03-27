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

  constructor(
    private router: Router,
    private heroService: HeroService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void { }
}

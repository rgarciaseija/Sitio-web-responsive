import { HeroTableComponent } from './components/hero-table/hero-table.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // this will display a list of all heroes
  { path: 'heroes', component: HeroTableComponent },
  { path: 'heroes/:id', component: HeroTableComponent },
  // display the HeroFormComponent to add a new hero
  { path: 'addHero', component: HeroFormComponent },
  // this will display heroes details on the HeroFormComponent
  { path: 'heroes/detail/:id', component: HeroFormComponent },
  // redirecto to /heroes when path is not specified
  { path: '', redirectTo: '/heroes', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HeroTableComponent } from './components/hero-table/hero-table.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'heroes', component: HeroTableComponent },
  { path: 'details/:id', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

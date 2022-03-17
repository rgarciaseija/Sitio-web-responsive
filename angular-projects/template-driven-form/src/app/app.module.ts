import { HeroService } from './services/hero.service';
import { RouterModule } from '@angular/router';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroTableComponent } from './components/hero-table/hero-table.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroTableComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,       // TODO: What does RouterModule do again?
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService],      // TODO: What does providers do?
  bootstrap: [AppComponent]
})
export class AppModule { }

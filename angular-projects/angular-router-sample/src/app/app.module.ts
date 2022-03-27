import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    // define two routes using the RoterModule's
    // forRoot() function.
    // forRoot() function ensures that this application
    // only instantiates one RoterModule. Singleton?
    RouterModule.forRoot([
      // load CrisisListComponent when path is /crisis-list
      { path: 'crisis-list', component: CrisisListComponent },
      // load HeroesListComponent whe path is /heroes-list
      { path: 'heroes-list', component: HeroesListComponent},
      // this instructs Angular to redirect to /heroes-list
      // (redirectTo: '/heroes-list') when the path is empty (path: '').
      // How much of the URL to match? full (pathMatch: 'full')
      // TODO: What are the values of patchMatch?
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      // let's display the PageNotFoundComponent when the user
      // puts in an unknown, or unspecified route. Basically routes
      // that are not defined above
      { path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

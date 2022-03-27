import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HEROES } from './../_mock-data/mock-heroes';
import { Hero } from './../model/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // define empty array of heroes
  private heroes : Hero[] = [];
  // api url
  private heroesUrl = 'api/heroes';
  //  httpHeader
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient,
    // inject our MessageService
    private messageService: MessageService,
    // inject our mock data provider
    private dbs : InMemoryDataService) { }

  // get all heroes
  // this will return an Observable
  getHereos() : Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl)
    // .pipe(
    //   tap(_ => this.log('getHeroes')),
    //   catchError(this.handleError<Hero[]>('error at getHeroes', []))
    // );
  }

  // get hero by ID
  getHeroByID(id: Number) : Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log(url);
    return this.httpClient.get<Hero>(url).pipe(
      tap(_ => this.log('getHero')),
      catchError(this.handleError<Hero>('error at getHeroes'))
      );
  }

  // add a hero
  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero : Hero) => this.log(`added new Hero: ${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  // delete hero
  deleteHero(hero: Hero) : Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.httpClient.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted Hero: ${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  genId() : number {
    this.getHereos().subscribe(heroes => this.heroes = heroes);
    return this.dbs.genId(this.heroes)
  }

  // logging function
  // could call a rest service for logging
  // events to database
  //
  // @param message - string message to be logged
  private log(message: string) {
    // this.messageService.add(`HerroMessageService: ${message}`);
    // let's log to console for now
    console.log(message);
    this.messageService.add(message);
  }

  // handle http operation that failed.
  // let the app continue
  //
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result
  private handleError<T>(operation='operation', result?: T) {
    return(error : any): Observable<T>  => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }
}


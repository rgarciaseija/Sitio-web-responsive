import { environment } from './../../environments/environment';
import { Weather } from './../models/weather';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  // get weather of a particular city
  getWeather(city: string, unit: string = 'm'): Observable<Weather> {
    const params = new HttpParams()
    // city to be queried from the api
    .set('query',city)
    // developer access key
    .set('access_key', environment.apiKey) // let's not pass api key for now
    // units
    // m for Metric
    // s for Scientific
    // f for Fahrenheit
    .set('units', unit);

    // 1. send a get request to the weatherstack api
    // 2. return an observable of type Weather.
    return this.httpClient.get<Weather>(environment.apiUrl, {params: params});
  }
}

import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, units: string = 'metric'): Observable<Weather> {
    const options = new HttpParams()
    // https://openweathermap.org/current#data
    //
    // we use metric for units to show temperatures in Celcius
    // use imperial if you want to use Fahrenheit
    // units is optional. if left blank or not specified,
    // kelvin will be used by default
    .set('units', units)
    .set('q', city)
    .set('appId', environment.apiKey)

    // reference:
    //  https://openweathermap.org/current
    //  https://openweathermap.org/current#data
    // console.log(environment.apiUrl+'weather');

    return this.httpClient.get<Weather>(environment.apiUrl+'weather', {params: options});
  }
}

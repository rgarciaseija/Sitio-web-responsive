import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { WeatherService } from './../../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather: Weather | undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Tetsting only
    // this.search('Cebu');
    // console.log(this.weather);
  }

  search(city: string) {
    this.weatherService.getWeather(city).subscribe(weather=>this.weather=weather);
  }

}

import { Weather } from './../../models/weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather!: Weather | undefined;
  queryCity: string = "";
  loading: boolean = false;

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    this.loading=false;
  }

  onBtnClick() {
    this.loading=true;
    this.search();
  }

  search() {
    this.weatherService.getWeather(this.queryCity, 'm').subscribe(weather=> {
      this.weather=weather; this.loading=false; console.log(this.loading);
    });
  }

}

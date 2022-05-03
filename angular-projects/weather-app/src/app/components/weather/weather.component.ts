import { Weather } from './../../models/weather';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // weather object
  weather!: Weather | undefined;
  queryCity: string = "";

  // used to display loading\progress bar
  loading: boolean = false;

  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {
    // will not display the loading\progress bar
    this.loading=false;
  }

  onBtnClick() {
    // when the button is clicked
    // set the loading variable to true.
    // this will display the loading bar.
    this.loading=true;

    // call the search function
    this.search();
  }

  search() {
    this.weatherService.getWeather(this.queryCity, 'm').subscribe(weather=> {
      // get the weather data
      this.weather=weather;
      // this will cause the loading/pregress bar to disappear
      this.loading=false;
    });
  }

}

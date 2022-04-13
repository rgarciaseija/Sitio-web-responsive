
// Each of these properties corresponds
// to a weather field in the OpenWeather
// API response.
//
// For reference:
// https://openweathermap.org/current#parameter
export interface Weather {
  weather: WeatherInfo[],
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  name: string;
}

interface WeatherInfo {
  main: string;
  icon: string;
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FetchDataService {
  public forecasts: WeatherForecast[];

  constructor(http: Http) {
    http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
      this.forecasts = result.json() as WeatherForecast[];
    });
  }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

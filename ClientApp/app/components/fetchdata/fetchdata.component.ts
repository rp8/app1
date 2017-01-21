import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FetchDataService } from '../services/fetchdata.service';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

/*    constructor(http: Http) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        });
    }
*/
    constructor(private fetchDataService: FetchDataService) {
        this.forecasts = [fetchDataService.forecasts[0]];
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

import { Injectable } from '@angular/core';
import { Weather, WeatherML } from 'src/app/interfaces/weather';
import { WEATHER } from 'src/app/test/mock-weather';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //properties
  readonly ROOT_URL = 'http://api.weatherapi.com/v1';
  readonly KEY = 'a69c3d3f037c4005a60214157231805';

  posts: any;
  constructor(private http: HttpClient) { }

  getMockWeather() { 
    // MOCK WEATHER
    let url = 'test/weather.json';
    return this.http.get<WeatherML>(url); }

  getWeather(location: string) {
    // /forecast.json?key=a69c3d3f037c4005a60214157231805&q=Toronto&days=1&aqi=no&alerts=no
    console.log(location);
    let url = this.ROOT_URL + '/forecast.json?key=' + this.KEY + '&q=' + location + '&days=1&aqi=no&alerts=no';
    console.log(url);
    return this.http.get<WeatherML>(url);
  }
}

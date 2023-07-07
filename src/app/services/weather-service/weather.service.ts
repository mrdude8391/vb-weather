import { Injectable } from '@angular/core';
import { Weather, WeatherML } from 'src/app/interfaces/weather';
import { WEATHER } from 'src/app/test/mock-weather';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //properties
  readonly ROOT_URL = 'https://api.weatherapi.com/v1';
  readonly KEY = 'a69c3d3f037c4005a60214157231805';
  weather: WeatherML | undefined;
  
  posts: any;
  constructor(private http: HttpClient) { }

  getMockWeather() { 
    // MOCK WEATHER
    let url = 'test/weather.json';
    return this.http.get<WeatherML>(url); }

getWeather(location: string) : Observable<WeatherML> {
  // /forecast.json?key=a69c3d3f037c4005a60214157231805&q=Toronto&days=1&aqi=no&alerts=no
  console.log("getWeather location", location);
  let url = this.ROOT_URL + '/forecast.json?key=' + this.KEY + '&q=' + location + '&days=3&aqi=no&alerts=no/';
  console.log(url);
  return this.http.get<WeatherML>(url)
  .pipe(
    tap(() => console.log("HTTP Request" , url)),
    catchError(this.handleError<WeatherML>('getWeather'))
  );
}

  private handleError<T>(operation = 'operation', result?: T){
    return (error: Error): Observable<T> => {
      console.log(operation, "Not Found", error);
      return throwError(() => error);
    }
  }
}

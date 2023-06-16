import { Component, Input } from '@angular/core';
import { Hour, WeatherML } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather-service/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  //properties
  
 //Constructor
 constructor(public weatherService: WeatherService) {
 }

 @Input() hours: Hour[] | undefined;


 //methods

 logWeather() {
  console.log(this.hours);
 }

}

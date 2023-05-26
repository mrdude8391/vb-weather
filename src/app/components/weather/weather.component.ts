import { WeatherService } from './../../services/weather-service/weather.service';
import { Weather, WeatherML } from 'src/app/interfaces/weather';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  //Properties
  weather : Weather = new Weather();

  posts: WeatherML | undefined;
  //Constructor
  constructor(private weatherService: WeatherService) {}

  //Methods
  getWeather() {
    let response = this.weatherService.getWeather();
    console.log("response is" , response)
    response.subscribe((data) => {
      console.log("getting weather", data);
    });
  }

  getPosts() {
    this.weatherService.getPosts()
    .subscribe(
      {
        next: (val: WeatherML) => {
          this.posts = { ...val};
          console.log("posts" , this.posts);
          },
        error: error => console.log(error),
      });
  }
}



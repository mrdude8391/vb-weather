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
  localWeather: WeatherML | undefined;
  location = "Toronto";
  //Constructor
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getLocalWeather(this.location);
  }

  //Methods
  getWeather() {
    let response = this.weatherService.getWeather();
    console.log("response is" , response)
    response.subscribe((data) => {
      console.log("getting weather", data);
    });
  }

  getLocation(locationForm: any){
    console.log("Form Submitted", locationForm);
    this.location = locationForm.location;
    this.getLocalWeather(this.location);
  }
  
  getLocalWeather(location: string) {
    this.weatherService.getPosts(location)
    .subscribe(
      {
        next: (val: WeatherML) => {
          this.localWeather = { ...val};
          console.log("posts" , this.localWeather);
          },
        error: error => console.log(error),
      });
  }
}



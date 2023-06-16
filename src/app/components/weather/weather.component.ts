import { WeatherService } from './../../services/weather-service/weather.service';
import { Hour, Weather, WeatherError, WeatherML } from 'src/app/interfaces/weather';
import { Component } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  //Properties
  weather: WeatherML | undefined;
  hours: Hour[] | undefined;
  errorMessage = "";
  location = "";
  coords = "";
  //Constructor
  constructor(public weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getUserLocation();
  }
  //
  //METHODS
  // 
  getMockWeather() {// MOCK METHOD 
    let response = this.weatherService.getMockWeather();
    console.log("response is" , response)
    response.subscribe((data) => {
      console.log("getting weather", data);
    });
  }

  getLocation(locationForm: any){ // Search location handler 
    this.location = locationForm.value.location;
    if(this.location === ""){ return;}
    console.log("Form Submitted", locationForm);
    this.getWeather(this.location);
  }

  getWeather(location: string) { // Weather Service API Call
    this.weatherService.getWeather(location).subscribe(
      {
        next: (val: WeatherML) => {
          this.errorMessage = "";
          this.weather = { ...val};
          this.hours = val.forecast.forecastday[0].hour;
          console.log("Subscribed Weather Data" , this.weather);
          },
        error: error => {
          console.log("Not Found" , error);
          let errorObj = error.error.error;
          console.log(errorObj.message);
          if(errorObj.code === 1006){
            this.errorMessage = errorObj.message;
          }
          if(errorObj.code == 1003){
            this.errorMessage = "Cannot be blank"
          }
        },
      });
    
  }

  getUserLocation() {// Geolocation user position onInit
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.coords = position.coords.latitude +"," +  position.coords.longitude;
        console.log("User Position: ", this.coords)
        this.getWeather(this.coords);
      },(error) => {
        alert(`Location access is blocked: ${error.message}`);
      });
    }else{
      console.log("User not allowed")
    }
  }

}





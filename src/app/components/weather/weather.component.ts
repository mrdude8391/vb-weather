import { WeatherService } from './../../services/weather-service/weather.service';
import { Weather, WeatherError, WeatherML } from 'src/app/interfaces/weather';
import { Component } from '@angular/core';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  //Properties
  localWeather: WeatherML | undefined;
  errorMessage = "";
  location = "Toronto";
  lng = 0;
  lat = 0;
  coords = "";
  //Constructor
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getUserLocation();
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
    this.location = locationForm.value.location;
    if(this.location === ""){ return;}
    console.log("Form Submitted", locationForm);
    this.getLocalWeather(this.location);
  }

  getLocalWeather(location: string) {
    this.weatherService.getPosts(location)
    .subscribe(
      {
        next: (val: WeatherML) => {
          this.errorMessage = "";
          this.localWeather = { ...val};
          console.log("Subscribed Data" , this.localWeather);
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

  getUserLocation() {
    // get Users current position
    // onInit
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.coords = this.lat +"," +  this.lng;
        console.log("Position: ", this.coords)
        this.getLocalWeather(this.coords);
      },(error) => {
        alert(`Location access is blocked: ${error.message}`);
      });
    }else{
      console.log("User not allowed")
    }
  }

}





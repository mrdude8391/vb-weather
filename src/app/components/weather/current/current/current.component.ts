import { Component, Input } from '@angular/core';
import { ForecastDay, WeatherML } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent {
  @Input() weather: WeatherML | undefined;
  @Input() selectedDay!: ForecastDay; 
}

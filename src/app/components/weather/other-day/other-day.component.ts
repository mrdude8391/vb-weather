import { Component, Input } from '@angular/core';
import { ForecastDay } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-other-day',
  templateUrl: './other-day.component.html',
  styleUrls: ['./other-day.component.css']
})
export class OtherDayComponent {

  @Input() selectedDay! : ForecastDay; 
}

import { Component, Input } from '@angular/core';
import { ForecastDay } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-day-selector',
  templateUrl: './day-selector.component.html',
  styleUrls: ['./day-selector.component.css']
})
export class DaySelectorComponent {
  @Input() day!: ForecastDay;
}

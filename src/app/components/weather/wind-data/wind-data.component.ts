import { Component, Input } from '@angular/core';
import { Hour } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-wind-data',
  templateUrl: './wind-data.component.html',
  styleUrls: ['./wind-data.component.css']
})
export class WindDataComponent {
  @Input() hours! : Hour[]; 

  

}

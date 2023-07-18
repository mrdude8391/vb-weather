import { Component, Input } from '@angular/core';
import { Hour } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-wind-data',
  templateUrl: './wind-data.component.html',
  styleUrls: ['./wind-data.component.css']
})
export class WindDataComponent {
  

  private _hours: Hour[] = [];
  @Input() set hours(value: Hour[] ) {
    let segment = [];
    for(let i = 0; i < value.length; i=i+4){
      segment.push(value[i]);
    }
    this._hours = segment;
 }; 

  get hours(): Hour[] {
  return this._hours;
 }
}

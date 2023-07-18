import { Component, Input } from '@angular/core';
import { Hour } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-rain-data',
  templateUrl: './rain-data.component.html',
  styleUrls: ['./rain-data.component.css']
})
export class RainDataComponent {
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

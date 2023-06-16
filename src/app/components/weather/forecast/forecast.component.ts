import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { throwIfEmpty } from 'rxjs';
import { Hour, WeatherML } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather-service/weather.service';
import { de } from 'date-fns/locale';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  //properties
  
 //Constructor
 constructor(public weatherService: WeatherService) {
 }
 //properties
 @Input() hours: Hour[] | undefined;

 tempData : any;
 
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        fill: true,
        tension: 0.5,
        
        backgroundColor: 'rgba(255,0,0,0.3)',
        pointRadius: 0,
      }
    ]
  }

  public lineChartOptions: ChartOptions<'line'> = {
    
    scales: {
      x: {
        type: 'time',
        grid: {
          display: false,
        },
        ticks:{
          stepSize: 2
        }
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 30,
        ticks: {
          stepSize: 10
        },
        
      },
      
    }
  };

 //methods

 logWeather() {
  console.log(this.hours);
 }
 
 hourLabelsInit() {
  let labels: Number[] = [];
  for(let i = 0; i < 12; i++){
    labels.push(i);
  }
  return labels
 }
 
 ngOnInit() : void {
  
 }

 ngOnChanges(changes: SimpleChanges){
  
  this.tempData = this.hours?.map(o => o.temp_c);
  console.log("forecast oninit",this.tempData);
  this.lineChartData.datasets[0].data = this.tempData;
  this.lineChartData.labels = this.hours?.map(o => o.time);
 }
 
}

import { Component, Input, } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Hour } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather-service/weather.service';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  
 //Constructor
 constructor(public weatherService: WeatherService) {
 }
 //properties
 private _hours: Hour[] = [];
 @Input() set hours(value: Hour[] ) {
    this._hours = value;
    this.updateChartData();
 };
 get hours(): Hour[] {
  return this._hours;
 }

 tempData : any = [];
 
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

 updateChartData() {
  this.lineChartData.datasets[0].data = this.hours.map(o => o.temp_c);
  this.lineChartData.labels = this.hours?.map(o => o.time);
  this.lineChartData = {...this.lineChartData};
 }
 
}

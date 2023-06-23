import { Component, Input, } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Hour } from 'src/app/interfaces/weather';
import { WeatherService } from 'src/app/services/weather-service/weather.service';
import 'chartjs-adapter-date-fns';
import { Chart } from 'chart.js';

import annotationPlugin from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  
 //Constructor
 constructor(public weatherService: WeatherService) {
 }

ngOnInit() : void {
  Chart.register(annotationPlugin);
  console.log(this.currentTime);
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

 currentTime = Date.now();
 
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
      
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            yMin: 30,
            yMax: 0,
            xMax: this.currentTime,
            xMin: this.currentTime,
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            label: {
              position: "start",
              display: true,
              content: ["Now"],
              font: {
                size: 12
              },
            }

          }
        }
      }
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ForecastComponent } from './components/weather/forecast/forecast.component';
import { CurrentComponent } from './components/weather/current/current/current.component';
import { NgChartsModule } from 'ng2-charts';
import { DaySelectorComponent } from './components/weather/day-selector/day-selector.component';
import { OtherDayComponent } from './components/weather/other-day/other-day.component';
import { WindDataComponent } from './components/weather/wind-data/wind-data.component';
import { RainDataComponent } from './components/weather/rain-data/rain-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent,
    CurrentComponent,
    DaySelectorComponent,
    OtherDayComponent,
    WindDataComponent,
    RainDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

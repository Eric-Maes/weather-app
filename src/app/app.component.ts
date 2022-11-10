import { Component } from '@angular/core';
import { WeatherService } from './meteo/meteo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  city: string = "";

  weathers: any = null;

  constructor(private weatherService: WeatherService){}

  viewWeather() {
    const obs = this.weatherService.getWeather(this.city);
      
    // change l'attribu weather pour l'affichage
    obs.subscribe((weather: any) => {
        this.weathers = weather;
      });

  }

  viewLocalWeather(){
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        this.weatherService.getLocalWeather(position)
          .subscribe(
            (weather: any) => this.weathers = weather
          )
      }
    )
  }

}

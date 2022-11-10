import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric`);
  }

  getLocalWeather(position: GeolocationPosition) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?appid=c06516a3bb199bb320181c589f72433c&lang=fr&units=metric&lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
  }


}

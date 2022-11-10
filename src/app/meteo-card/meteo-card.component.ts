import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meteo-card',
  templateUrl: './meteo-card.component.html',
  styleUrls: ['./meteo-card.component.scss']
})
export class MeteoCardComponent implements OnInit {

  @Input() weather: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FootballInfo } from './football-info.interface';
import { SportsComponent } from '../sports.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'sf-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.less']
})
export class FootballComponent implements OnInit, SportsComponent {

  @Input() match: Match<FootballInfo>;

  constructor() { }

  ngOnInit() {
  }

}

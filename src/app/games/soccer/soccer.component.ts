import { Component, Input, OnInit } from '@angular/core';
import { SportsComponent } from '../sports.interface';
import { SoccerInfo } from './soccer-info.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent implements OnInit, SportsComponent {

  @Input() match: Match<SoccerInfo>;

  constructor() { }

  ngOnInit() {
    
  }

}

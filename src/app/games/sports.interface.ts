import { FootballInfo } from './football/football-info.interface';
import { SoccerInfo } from './soccer/soccer-info.interface';
import { Match } from '../match.interface';

export interface SportsComponent {
  match: Match<FootballInfo|SoccerInfo>;
}

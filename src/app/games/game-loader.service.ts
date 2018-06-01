import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';
import { createCheckers } from 'ts-interface-checker';

import { FootballInfo } from './football/football-info.interface';
import FootballInfoTI from './football/football-info.interface-ti';
import { FootballComponent } from './football/football.component';

import { SoccerInfo } from './soccer/soccer-info.interface';
import SoccerInfoTI from './soccer/soccer-info.interface-ti';
import { SoccerComponent } from './soccer/soccer.component';

import { Match } from '../match.interface';

const GAME_TYPES = [
  { checker: createCheckers(FootballInfoTI).FootballInfo, component: FootballComponent },
  { checker: createCheckers(SoccerInfoTI).SoccerInfo, component: SoccerComponent },
];

@Injectable()
export class GameLoaderService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}
  
  getComponent(game: Match<FootballInfo|SoccerInfo>): any {
    return GAME_TYPES.reduce((resultComponent, { checker, component }) => {
      if (resultComponent) return resultComponent;
      return checker.test(game.matchInfo) ? component : resultComponent;
    }, null);
  }
}

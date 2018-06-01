import {
  Component, ComponentFactory, ComponentFactoryResolver, OnInit, Input, ReflectiveInjector,
  ViewChild, ViewContainerRef
} from '@angular/core';
import { GameLoaderService } from '../games/game-loader.service';
import { Match } from '../match.interface';
import { SoccerInfo } from '../games/soccer/soccer-info.interface';
import { FootballInfo } from '../games/football/football-info.interface';
import { SportsComponent } from '../games/sports.interface';

@Component({
  selector: 'sf-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.less']
})
export class MatchComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  @Input() info: Match<SoccerInfo|FootballInfo>;

  constructor(
    private gameLoader: GameLoaderService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let resolvedInputs = ReflectiveInjector.resolve([{ provide: 'matchInfo', useValue: this.info.matchInfo }]);
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.container.parentInjector);
    let factory = this.resolver.resolveComponentFactory(this.gameLoader.getComponent(this.info))
    let componentInstance = (<SportsComponent>this.container.createComponent(factory).instance);
    componentInstance.match = this.info;
  }

}

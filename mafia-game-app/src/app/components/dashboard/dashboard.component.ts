import { Component, OnInit } from '@angular/core';
import { Locals } from './../../mock-locals';
import { Local } from './../../local';
import { TurnState } from './../../turn-state'
import { Events } from './../events/mock-events';
import { Event } from './../events/event';
import { TransportEvents } from './../events/mock-transport-events';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  public firstOpenLocal: Local;
  public secondOpenLocal: Local;
  public currentTurn: number = 0;
  public endTurn: number = 0;
  private status: TurnState; 
  public rndEventNr: number;
  public rndEventSelect: Event;
  public transportEvent: Event;

  ngOnInit(): void {
  }
  prepareMap(): void {
    let openLocalId = Math.floor(Math.random() * 7);  
    this.firstOpenLocal = Locals[openLocalId];
    let openLocalId2 = Math.floor(Math.random() * 7);
    if (openLocalId !== openLocalId2) {
      this.secondOpenLocal = Locals[openLocalId2];
    } else {
      this.secondOpenLocal = Locals[(openLocalId2 + 1)];
    }
  }
  startGame(): void {
    this.endTurn = Math.floor(Math.random() * 5) + 10;
    this.status = TurnState.firstState;
    this.newTurn();
  }
  newTurn() {
    this.rndEventNr = Math.floor(Math.random() * (Events.length - 1));
    this.rndEventSelect = Events[this.rndEventNr];
    this.currentTurn++;
  }
  newTransportEvent() {
    let myNumber = Math.floor(Math.random() * (TransportEvents.length - 1));
    this.transportEvent = TransportEvents[myNumber];
  }
}
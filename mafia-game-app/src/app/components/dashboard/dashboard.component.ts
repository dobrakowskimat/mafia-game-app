import { Component, OnInit } from '@angular/core';
import { Locals } from './../../mock-locals';
import { Local } from './../../local';

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
  private status: string = "game start"; 

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
    this.status = "turn start";
    this.currentTurn = 1;
  }
}
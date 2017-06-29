import { Component, OnInit } from '@angular/core';
import { Events } from './mock-events';
import { Event } from './event';

@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: [ './event.component.scss' ]
})

export class EventComponent implements OnInit {

  public rndEventNr: number;
  public rndEventSelect: Event;
    
    ngOnInit(): void {
      console.log(Events.length +'<----');
    }
   
    rndEvents(): void {

    this.rndEventNr = Math.floor(Math.random() * Events.length);
    console.log(this.rndEventNr +'<---');
    ///arr -- event;
    // random event 
    // pokaz event
  }
}


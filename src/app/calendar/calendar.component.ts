import { Component } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {DateService} from "../shared/services/date.service";

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['../styles.css']

})

export class CalendarComponent {
  dayNames: String[] = ['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dateSubscription: Subscription;
  private date: Date;

  selectDay(day:number): void {

  }


  constructor(private dateService: DateService) {}
  ngOnInit(): void {
    this.dateSubscription = this.dateService.dateObservable.subscribe(date => this.date = date);
  }
  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }
}

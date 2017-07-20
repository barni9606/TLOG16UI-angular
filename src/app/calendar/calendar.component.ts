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
  private onlyDayChanging : boolean = false;
  //for drawing the calendar
  firstDay: number;
  daysInMonth : number;
  leftOfWeek : number;
  numberOfWeeks : number;
  weeks: number[];


  selectDay(day:number): void {

  }


  constructor(private dateService: DateService) {}
  ngOnInit(): void {
    this.dateSubscription = this.dateService.dateObservable.subscribe(date => {
      this.date = date;

      //for drawing
      this.leftOfWeek = 7;
      this.firstDay = this.dateService.getFirstDayOfWeekInMonth();
      if(this.firstDay === 0){
        this.firstDay = 7;
      }
      this.firstDay = this.firstDay * -1 + 2;
      this.daysInMonth = this.dateService.getNumberOfDaysInMonth();
      this.numberOfWeeks = -1 * this.firstDay + this.daysInMonth + 1;
      this.numberOfWeeks = Math.ceil(this.numberOfWeeks / 7);
      this.weeks = Array(this.numberOfWeeks);
      let asd: number = this.firstDay;
      for(let i = 0; i < this.weeks.length; i++){
        this.weeks[i] = asd;
        asd += 7;
      }
    });
  }
  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }
}

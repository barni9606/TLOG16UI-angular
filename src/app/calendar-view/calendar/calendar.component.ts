import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DateService } from '../../shared/services/date.service';
import { BackendService } from '../../shared/services/backend.service';
import { Month } from '../../shared/classes/month';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['../../styles.css']

})

export class CalendarComponent implements OnInit, OnDestroy {
  dayNames: String[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  dateSubscription: Subscription;
  private date: Date;
  // for drawing the calendar
  firstDay: number;
  daysInMonth: number;
  numberOfWeeks: number;
  // weeks: number[];
  month: Month;
  // data from backend
  days: any[];
  // selected day
  selectedDay = false;

  constructor(private dateService: DateService, private backendService: BackendService) {
  }

  selectDay() {
    if (this.selectedDay) {

    }
    this.selectedDay = true;
  }

  ngOnInit(): void {
    this.month = new Month(this.dateService);
    this.dateSubscription = this.dateService.dateObservable.subscribe(date => {
      if (this.date && this.date.getFullYear() === date.getFullYear() && this.date.getMonth() === date.getMonth()) {
        this.selectDay();
        this.date = date;
      } else {
        this.date = date;

        // backend
        this.backendService.getMonth(this.date.getFullYear(), this.date.getMonth()).subscribe(data => {
          this.days = data;
          this.drawCalendar();
          console.log(this.month);
        });
      }
    });
  }

  private drawCalendar(): void {
    this.month = new Month(this.dateService, this.days);
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }
}

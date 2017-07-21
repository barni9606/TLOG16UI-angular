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
  weeks: number[];
  month: Month;
  // data from backend
  days: any[];
  // selected day
  selectedDay: boolean;

  constructor(private dateService: DateService, private backendService: BackendService) {
  }

  selectDay() {
    this.selectedDay = true;
  }

  ngOnInit(): void {
    this.dateSubscription = this.dateService.dateObservable.subscribe(date => {
      if (this.date && this.date.getFullYear() === date.getFullYear() && this.date.getMonth() === date.getMonth()) {
        this.date = date;
        this.selectDay();
      } else {
        this.date = date;

        // backend
        this.backendService.getMonth(this.date.getFullYear(), this.date.getMonth()).subscribe(data => {
          this.days = data;
          this.drawCalendar();
        });
      }
    });
  }

  private drawCalendar(): void {
    this.firstDay = this.dateService.getFirstDayOfWeekInMonth();
    if (this.firstDay === 0) {
      this.firstDay = 7;
    }
    this.firstDay = this.firstDay * -1 + 2;
    this.daysInMonth = this.dateService.getNumberOfDaysInMonth();
    this.numberOfWeeks = -1 * this.firstDay + this.daysInMonth + 1;
    this.numberOfWeeks = Math.ceil(this.numberOfWeeks / 7);
    this.weeks = Array(this.numberOfWeeks);
    let asd: number = this.firstDay;
    for (let i = 0; i < this.weeks.length; i++) {
      this.weeks[i] = asd;
      asd += 7;
    }
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }
}

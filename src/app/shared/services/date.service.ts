import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Day } from '../classes/day';

@Injectable()
export class DateService {
  private date = new BehaviorSubject<Date>(new Date());
  dateObservable = this.date.asObservable();
  day: Day;

  getMonth(): number {
    return this.date.getValue().getMonth();
  }

  getYear(): number {
    return this.date.getValue().getFullYear();
  }

  setDate(year: number, month: number, day: number = 1, dayObject: Day = null) {
    this.date.next(new Date(year, month, day));
    this.day = dayObject;
  }

  isWeekend(): boolean {
    const day = this.date.getValue().getDay();
    return day === 0 || day === 6;
  }

  getNumberOfDaysInMonth(): number {
    const date = this.date.getValue();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  getFirstDayOfWeekInMonth(): number {
    const date = this.date.getValue();
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

}

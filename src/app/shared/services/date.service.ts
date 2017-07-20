import { Injectable }    from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DateService {
  private date = new BehaviorSubject<Date>(new Date());
  dateObservable = this.date.asObservable();

  getMonth(): number{
    return this.date.getValue().getMonth();
  }
  getYear(): number {
    return this.date.getValue().getFullYear();
  }
  setDate(year:number, month: number, day: number = 1){
    this.date.next(new Date(year, month, day));
  }

  getNumberOfDaysInMonth(): number{
    let date = this.date.getValue();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  getFirstDayOfWeekInMonth(): number{
    let date = this.date.getValue();
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

}

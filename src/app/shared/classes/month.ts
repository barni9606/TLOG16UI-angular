import { Week } from './week';
import { DateService } from '../services/date.service';
export class Month {
  weeks: Week[];
  requiredMinPerMonth: number;
  extraMinPerMonth: number;
  firstDayOfMonth: number;
  daysInMonth: number;
  numberOfWeeks: number;

  constructor(private dateService: DateService, days: any[] = null) {
    this.firstDayOfMonth = this.dateService.getFirstDayOfWeekInMonth();
    if (this.firstDayOfMonth === 0) {
      this.firstDayOfMonth = 7;
    }
    this.firstDayOfMonth = this.firstDayOfMonth * -1 + 2;
    this.daysInMonth = this.dateService.getNumberOfDaysInMonth();
    this.numberOfWeeks = -1 * this.firstDayOfMonth + this.daysInMonth + 1;
    this.numberOfWeeks = Math.ceil(this.numberOfWeeks / 7);
    this.weeks = Array(this.numberOfWeeks);

    let firstDayOfWeek: number = this.firstDayOfMonth;
    for (let i = 0; i < this.weeks.length; i++) {
      this.weeks[i] = new Week(firstDayOfWeek, this.daysInMonth);
      firstDayOfWeek += 7;
    }
    this.requiredMinPerMonth = 0;
    this.extraMinPerMonth = 0;
    if (days !== null) {
      for (const day of days) {
        for (let i = 0; i < this.numberOfWeeks; i++) {
          if (day['actualDay']['dayOfMonth'] < this.weeks[i].lastDayOfWeek &&
              day['actualDay']['dayOfMonth'] >= this.weeks[i].days[0].day) {
            this.weeks[i].setWorkDay(day['actualDay']['dayOfMonth'], true, day['extraMinPerDay'], day['requiredMinPerDay']);
          }
        }
        this.requiredMinPerMonth += day['requiredMinPerDay'];
        this.extraMinPerMonth += day['extraMinPerDay'];
      }
    }
  }
}

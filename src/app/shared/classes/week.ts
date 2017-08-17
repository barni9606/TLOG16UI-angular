import { Day } from './day';
export class Week {
  days: Day[];
  lastDayOfWeek: number;
  constructor(public firstDayOfWeek: number, public lastDayOfMonth: number) {
    if (lastDayOfMonth - firstDayOfWeek < 7) {
      this.days = Array(lastDayOfMonth - firstDayOfWeek + 1);

    } else {

      this.days = Array(7);
    }
    for (let i = 0; i < this.days.length; i++) {
      this.days[i] = new Day();
      this.days[i].day = firstDayOfWeek + i;
    }
    this.lastDayOfWeek = this.days[this.days.length - 1].day;
  }

  setWorkDay (day: number, active: boolean, extraMinPerDay: number, requiredMinPerDay: number) {
    day = day - this.days[0].day;
    this.days[day].active = active;
    this.days[day].extraMinPerDay = extraMinPerDay;
    this.days[day].requiredMinPerDay = requiredMinPerDay;
  }
}

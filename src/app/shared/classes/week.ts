import { Day } from './day';
export class Week {
  days: Day[];
  setDays(firstDayOfWeek: number, lastDayOfMonth: number) {
    if (lastDayOfMonth - firstDayOfWeek < 7) {
      this.days = Array(lastDayOfMonth - firstDayOfWeek + 1);

    } else {

      this.days = Array(7);
    }
    for (let i = 0; i < this.days.length; i++) {
      this.days[i] = new Day();
      this.days[i].day = firstDayOfWeek + i;
    }
  }
}

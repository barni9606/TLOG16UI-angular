import { Component, Input, OnInit } from '@angular/core';
import { Week } from '../../../shared/classes/week';
import { Day } from '../../../shared/classes/day';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['../../../styles.css']

})

export class WeekComponent implements OnInit {
  @Input() firstDayOfWeek: number;
  @Input() lastDayOfMonth: number;
  @Input() workDays: any[];
  workWeek: Week = new Week();

  ngOnInit(): void {
    this.workWeek.setDays(this.firstDayOfWeek, this.lastDayOfMonth);
    for (const workDay of this.workDays) {
      if ( workDay['actualDay']['dayOfMonth'] <= this.workWeek.days[this.workWeek.days.length - 1].day
        && workDay['actualDay']['dayOfMonth'] >= this.workWeek.days[0].day) {
        this.workWeek.days[workDay['actualDay']['dayOfMonth'] - this.firstDayOfWeek].extraMinPerDay = workDay['extraMinPerDay'];
        this.workWeek.days[workDay['actualDay']['dayOfMonth'] - this.firstDayOfWeek].active = true;
      }
    }
  }
}

import {AfterContentInit, AfterViewChecked, Component, Input, OnChanges, OnInit} from '@angular/core';
import { Task } from '../../shared/classes/task';
import { DateService } from '../../shared/services/date.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-daily-statistics',
  templateUrl: 'daily-statistics.component.html',
  styleUrls: ['../../styles.css']

})

export class DailyStatisticsComponent {
  @Input() tasks: Task[];

  constructor(private dateService: DateService) {}
  extraMinutes(): number {
    let temp = 0;
    if (!isUndefined(this.tasks)) {
      for (const task of this.tasks) {
        temp += task.minPerTask;
      }
      return temp - this.dateService.day.requiredMinPerDay;

    }
  }


}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../../shared/classes/task';
import { DateService } from '../../shared/services/date.service';

@Component({
  selector: 'app-daily-statistics',
  templateUrl: 'daily-statistics.component.html',
  styleUrls: ['../../styles.css']

})

export class DailyStatisticsComponent implements OnChanges {
  @Input() tasks: Task[];
  extraMinutes = 0;
  constructor(private dateService: DateService) {}
  ngOnChanges(): void {
      for (const task of this.tasks) {
        this.extraMinutes += task.minPerTask;
      }
      this.extraMinutes -= this.dateService.day.requiredMinPerDay;


  }


}

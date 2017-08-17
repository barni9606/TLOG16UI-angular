import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Task, Time} from '../../shared/classes/task';
import {BackendService} from '../../shared/services/backend.service';
import {DateService} from '../../shared/services/date.service';
import {isUndefined} from 'util';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: 'edit-task-form.component.html',
  styleUrls: ['../../styles.css']

})

export class EditTaskFormComponent implements OnChanges {
  @Input() task: Task;
  @Input() tasks: Task[];
  startTime: string;
  endTime: string;

  private static setTime(time: Time, timeString: string) {
    const startTime = timeString.split(':');
    time.hour   = parseInt(startTime[0], 10);
    time.minute = parseInt(startTime[1], 10);
  }

  private static getTimeString(time: Time): string {
    if (!isUndefined(time.hour) && !isUndefined(time.minute)) {
      const hour = time.hour;
      const minute = time.minute;
      return (hour > 10 ? hour : '0' + hour) + ':' +
        (minute > 10 ? minute : '0' + minute);
    } else {
      return '';
    }
  }

  ngOnChanges(): void {
    console.log('onChange');
    this.startTime = EditTaskFormComponent.getTimeString(this.task.startTime);
    this.endTime = EditTaskFormComponent.getTimeString(this.task.endTime);
  }

  constructor(private backendService: BackendService, private dateService: DateService) {}

  existing(): boolean {
    for (const task of this.tasks){
      if (Task.equals(this.task, task)) {
        return true;
      }
    }
    return false;
  }

  submit() {
    this.setTimes();
    this.backendService.createTask(this.dateService.getYear(),
      this.dateService.getMonth(), this.dateService.day.day, this.task).subscribe(() => {
      this.backendService.fireLoadTasksEvent();
    });
  }

  private setTimes() {
    EditTaskFormComponent.setTime(this.task.startTime, this.startTime);
    EditTaskFormComponent.setTime(this.task.endTime, this.endTime);
  }

  startTimeChange(valid: boolean) {
    if (valid) {
      EditTaskFormComponent.setTime(this.task.startTime, this.startTime);
    }
  }
}

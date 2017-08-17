import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task, Time} from '../../shared/classes/task';

@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['../../styles.css']

})

export class TaskListTableComponent {
  @Input() tasks: Task[];
  @Output() editNotify: EventEmitter<any> = new EventEmitter();
  @Output() deleteNotify: EventEmitter<any> = new EventEmitter();
  editTask(task: Task) {
    this.editNotify.emit(task);
  }
  deleteTask(task: Task) {
    this.deleteNotify.emit(task);
  }
  timeToString(time: Time): string {
    return Time.timeToString(time);
  }
}

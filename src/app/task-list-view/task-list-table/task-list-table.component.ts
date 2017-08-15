import { Component, Input } from '@angular/core';
import { Task } from '../../shared/classes/task';

@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['../../styles.css']

})

export class TaskListTableComponent {
  @Input() tasks: Task[];
}

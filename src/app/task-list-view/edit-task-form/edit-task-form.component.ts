import { Component } from '@angular/core';
import { Task } from '../../shared/classes/task';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: 'edit-task-form.component.html',
  styleUrls: ['../../styles.css']

})

export class EditTaskFormComponent {
  task: Task;
  startTime: string;
  endTime: string;

  submit() {}
}

import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { DateService } from '../../shared/services/date.service';
import { Task } from '../../shared/classes/task';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['../../styles.css']

})

export class TaskListComponent implements OnInit {
  loadTasksSubscription: Subscription;
  tasks: Task[];
  editingTask: Task;
  deletingTask: Task;
  constructor(private dateService: DateService, private backendService: BackendService) {}
  ngOnInit(): void {
      this.loadTasksSubscription = this.backendService.loadTasksEventObservable.subscribe(() => {
        if (this.dateService.day) {
          this.backendService.getTasks(this.dateService.getYear(), this.dateService.getMonth(), this.dateService.day.day)
            .subscribe((datas: Task[]) => {
              this.tasks = datas;
            });
        } else {
          this.tasks = [];
        }
      });
      this.backendService.fireLoadTasksEvent();

  }

  newTask() {
    this.editingTask = new Task();
  }

  editTask(task: Task) {
    this.cancelDeleteTask();
    this.editingTask = Task.clone(task);
  }

  deleteTask(task: Task) {
    this.cancelEditTask();
    this.deletingTask = task;
  }

  cancelEditTask() {
    this.editingTask = null;
  }

  confirmDelete() {
    if (this.deletingTask) {
      this.backendService.deleteTask(this.dateService.getYear(),
        this.dateService.getMonth(), this.dateService.day.day, this.deletingTask).subscribe(() => {
        this.backendService.fireLoadTasksEvent();
        this.deletingTask = null;
      });
    }
  }

  cancelDeleteTask() {
    this.deletingTask = null;
  }

}

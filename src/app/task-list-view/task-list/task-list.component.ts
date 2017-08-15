import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';
import { DateService } from '../../shared/services/date.service';
import { Task } from '../../shared/classes/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['../../styles.css']

})

export class TaskListComponent implements OnInit {
  tasks: Task[];
  constructor(private dateService: DateService, private backendService: BackendService) {}
  ngOnInit(): void {
    if (this.dateService.day) {
      this.backendService.getTasks(this.dateService.getYear(), this.dateService.getMonth(), this.dateService.day.day)
        .subscribe((datas: Task[]) => {
          this.tasks = datas;
        });

    } else {
      this.tasks = [];
    }
  }

}

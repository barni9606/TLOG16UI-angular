import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import {Task} from '../classes/task';

@Injectable()
export class BackendService {
  url = 'http://127.0.0.1:8080/timelogger';
  private loadMonthEvent = new Subject();
  private loadTasksEvent = new Subject();
  loadMonthEventObservable = this.loadMonthEvent.asObservable();
  loadTasksEventObservable = this.loadTasksEvent.asObservable();

  constructor(private http: HttpClient) {}

  getMonth(year: number, month: number): Observable<any> {
    return this.http
      .get(this.url + `/workmonths/${year}/${month + 1}`);
  }

  getTasks(year: number, month: number, day: number) {
    return this.http
      .get(this.url + `/workmonths/${year}/${month + 1}/${day}`);
  }

  private activateDay(endpoint: string, year: number, month: number, day: number, requiredMins: number) {
    const body = {
      'year': year,
      'month': month + 1,
      'day': day,
      'requiredHours': requiredMins / 60
    };
    return this.http.post(this.url + endpoint, body);
  }

  activateWeekDay(year: number, month: number, day: number, requiredMins: number) {
    return this.activateDay('/workmonths/workdays', year, month, day, requiredMins);
  }

  activateWeekEnd(year: number, month: number, day: number, requiredMins: number) {
    return this.activateDay('/workmonths/workdays/weekend', year, month, day, requiredMins);
  }

  fireLoadMonthEvent() {
    this.loadMonthEvent.next();
  }

  fireLoadTasksEvent() {
    this.loadTasksEvent.next();
  }

  createTask(year: number, month: number, day: number, task: Task): Observable<any> {
    const startTime = task.startTime.hour + ':' + task.startTime.minute;
    const endTime = task.endTime.hour + ':' + task.endTime.minute;
    const body = {'year': year, 'month': month + 1, 'day': day,
      'taskId': task.taskId, 'startTime': startTime,
      'newTaskId': task.taskId, 'newComment': task.comment, 'newStartTime': startTime, 'newEndTime': endTime};
    return this.http.put(this.url + '/workmonths/workdays/tasks/modify', body);
  }

  updateTask(year: number, month: number, day: number, newTask: Task, oldTask: Task): Observable<any> {
    const startTime = oldTask.startTime.hour + ':' + oldTask.startTime.minute;
    const newStartTime = newTask.startTime.hour + ':' + newTask.startTime.minute;
    const newEndTime = newTask.endTime.hour + ':' + newTask.endTime.minute;
    const body = {'year': year, 'month': month + 1, 'day': day,
      'taskId': oldTask.taskId, 'startTime': startTime,
      'newTaskId': newTask.taskId, 'newComment': newTask.comment, 'newStartTime': newStartTime, 'newEndTime': newEndTime};
    return this.http.put(this.url + '/workmonths/workdays/tasks/modify', body);

  }

  deleteTask(year: number, month: number, day: number, task: Task) {
    const startTime = task.startTime.hour + ':' + task.startTime.minute;
    const endTime = task.endTime.hour + ':' + task.endTime.minute;
    const body = {'year': year, 'month': month + 1, 'day': day,
      'taskId': task.taskId, 'startTime': startTime};
    return this.http.put(this.url + '/workmonths/workdays/tasks/delete', body);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BackendService {
  url = 'http://localhost:9080/timelogger';
  private loadEvent = new Subject();
  loadEventObservable = this.loadEvent.asObservable();

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

  fireLoadEvent() {
    this.loadEvent.next();
  }

}

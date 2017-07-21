import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
  url = 'http://localhost:9080/timelogger';

  constructor(private http: HttpClient) {}

  getMonth(year: number, month: number): Observable<any> {
    return this.http
      .get(this.url + `/workmonths/${year}/${month + 1}`);
  }
}

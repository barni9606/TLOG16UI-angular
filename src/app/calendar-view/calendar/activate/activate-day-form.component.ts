import { Component } from '@angular/core';
import { DateService } from '../../../shared/services/date.service';
import { BackendService } from '../../../shared/services/backend.service';

@Component({
  selector: 'app-activate-day-form',
  templateUrl: './activate-day-form.component.html',
  styleUrls: ['../../../styles.css']
})

export class ActivateDayFormComponent {
  requiredMin = 450;
  weekendOk: boolean;
  constructor(private dateService: DateService, private backendService: BackendService) {}
  hidden(): boolean {
    return !this.dateService.day || this.dateService.day.active;
  }
  getYear(): number {
    return this.dateService.getYear();
  }
  getMonth(): number {
    return this.dateService.getMonth();
  }
  getDay(): number {
    return this.dateService.day.day;
  }
  isWeekend(): boolean {
    return this.dateService.isWeekend();
  }
  activateDay() {
    let temp;
    if (this.requiredMin === 0) {
      temp = 450;
    } else {
      temp = this.requiredMin;
    }
    if (this.isWeekend()) {
      this.backendService.activateWeekEnd(this.getYear(), this.getMonth(), this.getDay(), temp)
        .subscribe(() => {
          this.backendService.fireLoadMonthEvent();
        })
      ;
    } else {
      this.backendService.activateWeekDay(this.getYear(), this.getMonth(), this.getDay(), temp)
        .subscribe(() => {
          this.backendService.fireLoadMonthEvent();
        })
      ;
    }
  }
}

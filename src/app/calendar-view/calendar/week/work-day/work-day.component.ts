import { Component, Input, OnDestroy } from '@angular/core';
import { Day } from '../../../../shared/classes/day';
import { DateService } from '../../../../shared/services/date.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['../../../../styles.css']

})

export class WorkDayComponent implements OnDestroy {
  @Input() day: Day;
  dateSubscription: Subscription;

  constructor(private dateService: DateService) {
  }

  select() {
    this.dateService.setDate(this.dateService.getYear(), this.dateService.getMonth(), this.day.day, this.day);
    if (!this.dateSubscription) {
      this.dateSubscription = this.dateService.dateObservable.subscribe(() => {
        if (this.dateSubscription) {
          this.dateSubscription.unsubscribe();
          this.dateSubscription = null;
          this.day.selected = false;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.dateSubscription) {
      this.dateSubscription.unsubscribe();
    }
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateService } from '../../../shared/services/date.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['../../../styles.css']

})

export class PagerComponent implements OnInit, OnDestroy {
  dateSubscription: Subscription;

  monthNames: String[] = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  month: number;
  year: number;
  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.dateSubscription = this.dateService.dateObservable.subscribe(date => {
      this.month = date.getMonth();
      this.year = date.getFullYear();
    });
  }

  changeMonth(i: number): void {
    if (this.month + i < 0) {
      this.year += -1;
      if (i === -1) {
        this.month = 11;
      }
    } else if (this.month + i > 11) {
      this.year += 1;
      if (i === 1) {
        this.month = 0;
      }

    } else {
      this.month += i;
    }
    this.dateService.setDate(this.year, this.month);
  }

  ngOnDestroy() {
    this.dateSubscription.unsubscribe();
  }

}

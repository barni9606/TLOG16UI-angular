import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['../../../styles.css']

})

export class WeekComponent implements OnInit{
  @Input() firstDayOfWeek: number;
  @Input() lastDayOfMonth: number;
  days: number[];

  ngOnInit(): void {
    if (this.lastDayOfMonth - this.firstDayOfWeek < 7) {
      this.days = Array(this.lastDayOfMonth - this.firstDayOfWeek + 1);

    } else {

      this.days = Array(7);
    }
    for (let i = 0; i < this.days.length; i++) {
      this.days[i] = this.firstDayOfWeek + i;
    }
  }
}
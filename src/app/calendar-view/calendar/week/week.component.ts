import { Component, Input, OnInit } from '@angular/core';
import { Week } from '../../../shared/classes/week';
import { Day } from '../../../shared/classes/day';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['../../../styles.css']

})

export class WeekComponent implements OnInit {
  @Input() workWeek: Week;

  ngOnInit(): void {
  }
}

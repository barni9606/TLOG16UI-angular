import { Component } from '@angular/core';

@Component({
  selector: 'monthly-statistics',
  templateUrl: 'monthly-statistics.component.html',
  styleUrls: ['../styles.css']

})

export class MonthlyStatisticsComponent {
  extraMinPerMonth: number;
  requiredMinPerMonth: number;

}

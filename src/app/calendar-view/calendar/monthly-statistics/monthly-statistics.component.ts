import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-statistics',
  templateUrl: './monthly-statistics.component.html',
  styleUrls: ['../../../styles.css']

})

export class MonthlyStatisticsComponent {
  @Input() extraMinPerMonth: number;
  @Input() requiredMinPerMonth: number;

}

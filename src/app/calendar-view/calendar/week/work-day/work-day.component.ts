import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-day',
  templateUrl: './work-day.component.html',
  styleUrls: ['../../../../styles.css']

})

export class WorkDayComponent {
  @Input() day: number;
  @Input() extraMinPerDay: number;

}

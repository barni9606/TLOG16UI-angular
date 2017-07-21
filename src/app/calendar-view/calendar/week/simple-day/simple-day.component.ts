import { Component, Input } from '@angular/core';
import { DateService } from '../../../../shared/services/date.service';

@Component({
  selector: 'app-simple-day',
  templateUrl: './simple-day.component.html',
  styleUrls: ['../../../../styles.css']

})

export class SimpleDayComponent {
  @Input() day: number;
  selected = false;

  constructor(private dateService: DateService) {
  }

  onClick() {
    this.dateService.setDate(this.dateService.getYear(), this.dateService.getMonth(), this.day);
  }
}

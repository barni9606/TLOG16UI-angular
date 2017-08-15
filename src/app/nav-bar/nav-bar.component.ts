import { Component } from '@angular/core';
import { DateService } from '../shared/services/date.service';
import { Day } from '../shared/classes/day';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['../styles.css']

})

export class NavBarComponent {
  title: String = 'Timelogger';
  constructor(private dateService: DateService) {}
  getDay(): Day {
    return this.dateService.day;
  }
}

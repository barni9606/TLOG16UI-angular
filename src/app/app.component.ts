import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateService } from './shared/services/date.service';
import { Day } from './shared/classes/day';

@Component({
  selector: 'app-tlog-app',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})
export class AppComponent {

  constructor(private dateService: DateService) {}
  getYear(): number {
    return this.dateService.getYear();
  }
  getMonth(): number {
    return this.dateService.getMonth();
  }
  getDay(): Day {
    return this.dateService.day;
  }
}

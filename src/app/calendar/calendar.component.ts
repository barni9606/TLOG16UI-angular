import { Component } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['../styles.css']

})

export class CalendarComponent {
  dayNames: String[] = ['Mon', "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

}

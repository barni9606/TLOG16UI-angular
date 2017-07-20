import {Component, Input} from '@angular/core';

@Component({
  selector: 'simple-day',
  templateUrl: 'simple-day.component.html',
  styleUrls: ['../styles.css']

})

export class SimpleDayComponent {
  @Input() day: number;
}
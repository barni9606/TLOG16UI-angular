import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CalendarComponent } from '../../calendar-view/calendar/calendar.component';
import { DailyStatisticsComponent } from '../../task-list-view/daily-statistics/daily-statistics.component';
import { MonthlyStatisticsComponent } from '../../calendar-view/calendar/monthly-statistics/monthly-statistics.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PagerComponent } from '../../calendar-view/calendar/pager/pager.component';
import { SimpleDayComponent } from '../../calendar-view/calendar/week/simple-day/simple-day.component';
import { TaskListComponent } from '../../task-list-view/task-list/task-list.component';
import { TaskListTableComponent } from '../../task-list-view/task-list-table/task-list-table.component';
import { WeekComponent } from '../../calendar-view/calendar/week/week.component';
import { WeekendComponent } from '../../weekend/weekend.component';
import { DateService } from '../services/date.service';
import { WorkDayComponent } from '../../calendar-view/calendar/week/work-day/work-day.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CalendarComponent,
    DailyStatisticsComponent,
    MonthlyStatisticsComponent,
    NavBarComponent,
    PagerComponent,
    SimpleDayComponent,
    TaskListComponent,
    TaskListTableComponent,
    WeekComponent,
    WeekendComponent,
    WorkDayComponent


  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

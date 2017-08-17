import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { CalendarComponent } from './calendar-view/calendar/calendar.component';
import { DailyStatisticsComponent } from './task-list-view/daily-statistics/daily-statistics.component';
import { MonthlyStatisticsComponent } from './calendar-view/calendar/monthly-statistics/monthly-statistics.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PagerComponent } from './calendar-view/calendar/pager/pager.component';
import { SimpleDayComponent } from './calendar-view/calendar/week/simple-day/simple-day.component';
import { TaskListComponent } from './task-list-view/task-list/task-list.component';
import { TaskListTableComponent } from './task-list-view/task-list-table/task-list-table.component';
import { WeekComponent } from './calendar-view/calendar/week/week.component';
import { DateService } from './shared/services/date.service';
import { WorkDayComponent } from './calendar-view/calendar/week/work-day/work-day.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './shared/services/backend.service';
import { ActivateDayFormComponent } from './calendar-view/calendar/activate/activate-day-form.component';
import { RequiredMinValidatorDirective } from './shared/validators/required-mins-validator.directive';
import { EditTaskFormComponent } from './task-list-view/edit-task-form/edit-task-form.component';
import { TaskIdValidatorDirective } from './shared/validators/task-id-validator.directive';
import {TimeValidatorDirective} from './shared/validators/time-validator.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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
    WorkDayComponent,
    ActivateDayFormComponent,
    RequiredMinValidatorDirective,
    EditTaskFormComponent,
    TaskIdValidatorDirective,
    TimeValidatorDirective


  ],
  providers: [
    DateService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

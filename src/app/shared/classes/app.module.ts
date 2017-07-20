import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CalendarComponent} from "../../calendar-view/calendar/calendar.component";
import {DailyStatisticsComponent} from "../../task-list-view/daily-statistics/daily-statistics.component";
import {MonthlyStatisticsComponent} from "../../calendar-view/monthly-statistics/monthly-statistics.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {PagerComponent} from "../../calendar-view/pager/pager.component";
import {SimpleDayComponent} from "../../calendar-view/simple-day/simple-day.component";
import {TaskListComponent} from "../../task-list-view/task-list/task-list.component";
import {TaskListTableComponent} from "../../task-list-view/task-list-table/task-list-table.component";
import {WeekComponent} from "../../calendar-view/week/week.component";
import {WeekendComponent} from "../../weekend/weekend.component";
import {DateService} from "../services/date.service";

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


  ],
  providers: [ DateService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

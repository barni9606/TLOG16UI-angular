import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CalendarComponent} from "../../calendar/calendar.component";
import {DailyStatisticsComponent} from "../../daily-statistics/daily-statistics.component";
import {MonthlyStatisticsComponent} from "../../monthly-statistics/monthly-statistics.component";
import {NavBarComponent} from "../../nav-bar/nav-bar.component";
import {PagerComponent} from "../../pager/pager.component";
import {SimpleDayComponent} from "../../simple-day/simple-day.component";
import {TaskListComponent} from "../../task-list/task-list.component";
import {TaskListTableComponent} from "../../task-list-table/task-list-table.component";
import {WeekComponent} from "../../week/week.component";
import {WeekendComponent} from "../../weekend/weekend.component";

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
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

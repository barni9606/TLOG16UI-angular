import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar-view/calendar/calendar.component';
import { TaskListComponent } from './task-list-view/task-list/task-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/calendar', pathMatch: 'full'},
  {path: 'calendar', component: CalendarComponent},
  {path: 'app-task-list', component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';


const routes: Routes = [
  {
    path: "tasks",
    component: TasksComponent
  },
  {
    path: "**",
    redirectTo: "tasks"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

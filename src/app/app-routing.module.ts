import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreativeTeamComponent} from "./creative-team/creative-team.component";
import {DashboardComponent} from "./creative-team/dashboard/dashboard.component";

const routes: Routes = [{
  path: '',
  component: CreativeTeamComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

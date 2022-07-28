import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreativeTeamComponent} from "./creative-team/creative-team.component";
import {DashboardComponent} from "./creative-team/dashboard/dashboard.component";
import {UserProfileComponent} from "./creative-team/user-profile/user-profile.component";
import {TableListComponent} from "./creative-team/table-list/table-list.component";
import {MapsComponent} from "./creative-team/maps/maps.component";

const routes: Routes = [{
  path: '',
  component: CreativeTeamComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
    {
     path:'user-profile',
      component: UserProfileComponent
    },
    {
      path:'table-list',
      component: TableListComponent
    },
    {
      path:'map',
      component: MapsComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

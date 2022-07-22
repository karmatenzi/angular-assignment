import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreativeTeamComponent} from "./creative-team.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CreativeTeamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    SharedModule,
    MatCardModule

  ]
})
export class CreativeTeamModule { }

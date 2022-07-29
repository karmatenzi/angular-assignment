import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreativeTeamComponent} from "./creative-team.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {DashboardModule} from "./dashboard/dashboard.module";
import {UserProfileModule} from "./user-profile/user-profile.module";
import { TableListComponent } from './table-list/table-list.component';
import {MatTableModule} from "@angular/material/table";
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    CreativeTeamComponent,
    TableListComponent,
    MapsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        DashboardModule,
        MatSidenavModule,
        MatDividerModule,
        FlexLayoutModule,
        SharedModule,
        MatCardModule,
        UserProfileModule,
        MatTableModule

    ]
})
export class CreativeTeamModule { }

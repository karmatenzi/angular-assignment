import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardsComponent} from "./cards/cards.component";
import {GraphsComponent} from "./graphs/graphs.component";
import {TablesComponent} from "./tables/tables.component";
import {DashboardComponent} from "./dashboard.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AppRoutingModule} from "../../app-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MatDividerModule} from "@angular/material/divider";
import {FlexModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { GraphIconComponent } from './graphs/graph-icon/graph-icon.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    GraphsComponent,
    TablesComponent,
    GraphIconComponent,
    GraphIconComponent
  ],
  exports: [
  ],
    imports: [
        CommonModule,
        MatSidenavModule,
        AppRoutingModule,
        SharedModule,
        MatDividerModule,
        FlexModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatTableModule,
        MatButtonToggleModule,
        HighchartsChartModule,
        MatCheckboxModule,
        MatListModule,
        MatTooltipModule
    ]
})
export class DashboardModule { }

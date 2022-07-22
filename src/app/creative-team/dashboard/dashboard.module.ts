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



@NgModule({
  declarations: [
    DashboardComponent,
    CardsComponent,
    GraphsComponent,
    TablesComponent
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
    MatIconModule
  ]
})
export class DashboardModule { }

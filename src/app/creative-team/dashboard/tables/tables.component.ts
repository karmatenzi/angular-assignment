import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sonam', weight: 100, symbol: 'Bhutan'},
  {position: 2, name: 'Sangay', weight: 100, symbol: 'Korea'},
  {position: 3, name: 'Lhatruel', weight: 100, symbol: 'Japan'},
  {position: 4, name: 'Dhan', weight: 100, symbol: 'Singapore'},
];

@Component({
  selector: 'app-dashboard-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  //graph
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  words = [
    {
      info: 'Sign contract for "What are conference organizers afraid of?"',
      edit: "#BC6EC9",
      delete: "#ED4D49"
    },
    {
      info: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      edit: "#BC6EC9",
      delete: "#ED4D49"
    },
    {
      info: 'Flooded: One year later, assessing what was lost and what was found',
      edit: "#BC6EC9",
      delete: "#ED4D49"
    },
    {
      info: 'Create 4 Invisible User Experiences you Never Knew About',
      edit: "#BC6EC9",
      delete: "#ED4D49"
    }
  ];
  navs =[
    {
      icon: 'bug_report',
      text: 'BUGS'
    },
    {
      icon: 'code',
      text: 'WEBSITES'
    },
    {
      icon: 'cloud',
      text: 'SERVER'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

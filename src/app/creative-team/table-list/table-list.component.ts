import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  salary: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', salary: 100.0},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', salary: 100},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', salary: 100},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', salary: 100},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', salary: 100},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', salary: 100},
];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','salary'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

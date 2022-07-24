import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
graphs=[
  {
    updates: 'Daily Sales',
    info:'55%',
    icon:'update',
    foot: 'update 4 minutes ago',
  },
  {
    updates: 'Daily Sales',
    info:'55%',
    icon:'update',
    foot: 'update 4 minutes ago',
  },
  {
    updates: 'Daily Sales',
    info:'55%',
    icon:'update',
    foot: 'update 4 minutes ago',
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

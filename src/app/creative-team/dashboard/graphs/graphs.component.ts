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
    info:'55% increase in today sales.',
    icon:'update',
    foot: 'update 4 minutes ago',
    bgColor: "#5CB460"
  },
  {
    updates: 'Email Subscriptions',
    info:'Last Campaign Performance',
    icon:'update',
    foot: 'campaign sent 2 days ago',
    bgColor: "#FEA11E"
  },
  {
    updates: 'Completed Tasks',
    info:'Last Campaign Performance',
    icon:'update',
    foot: 'campaign sent 2 days ago',
    bgColor: "#ED4D49"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
cards=[
  {
    icon: 'content_copy',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'warning',
    text:'Get More Space...'
  },
  {
    icon: 'store',
    header: 'Revenue',
    char:'$34,245',
    foot: 'date_range',
    text:'Last 24 Hours'
  },
  {
    icon: 'info_outline',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'local_offer',
    text:'Get More Space...'
  },
  {
    icon: 'facebook',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'update',
    text:'Get More Space...'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

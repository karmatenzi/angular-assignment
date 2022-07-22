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
    icon: 'content_copy',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'warning',
    text:'Get More Space...'
  },
  {
    icon: 'content_copy',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'warning',
    text:'Get More Space...'
  },
  {
    icon: 'content_copy',
    header: 'Used Space',
    char:'49/50  GB',
    foot: 'warning',
    text:'Get More Space...'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}

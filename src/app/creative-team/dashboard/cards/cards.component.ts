import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards = [
    {
      icon: 'content_copy',
      header: 'Used Space',
      char: '49/50  GB',
      foot: 'warning',
      text: 'Get More Space...',
      textColor: "#BC6EC9",
      iconColor: "#F44337",
      bgColor: "#FEA11E"
    },
    {
      icon: 'store',
      header: 'Revenue',
      char: '$34,245',
      foot: 'date_range',
      text: 'Last 24 Hours',
      textColor: "#A4A29E",
      iconColor: "#A4A29E",
      bgColor: "#5CB460"
    },
    {
      icon: 'info_outline',
      header: 'Used Space',
      char: '49/50  GB',
      foot: 'local_offer',
      text: 'Get More Space...',
      textColor: "#A4A29E",
      iconColor: "#A4A29E",
      bgColor: "#ED4D49"
    },
    {
      icon: 'facebook',
      header: 'Used Space',
      char: '49/50  GB',
      foot: 'update',
      text: 'Get More Space...',
      textColor: "#A4A29E",
      iconColor: "#A4A29E",
      bgColor: "#11B8CC"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

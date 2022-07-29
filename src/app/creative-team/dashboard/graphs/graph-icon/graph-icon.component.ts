import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-graph-icon',
  templateUrl: './graph-icon.component.html',
  styleUrls: ['./graph-icon.component.scss']
})
export class GraphIconComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};

  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions = {
      xAxis: {
        tickInterval: 0.1,
        type: 'logarithmic',
        accessibility: {
          rangeDescription: 'Range: 1 to 10'
        }
      },
      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        accessibility: {
          rangeDescription: 'Range: 0.1 to 1000'
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b>',
        pointFormat: 'x = {point.x}, y = {point.y}'
      },
      series: [{
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        pointStart: 1
      }]
    }
  }

}

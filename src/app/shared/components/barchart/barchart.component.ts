import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  chartOptions: {};
  Highcharts: typeof Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Student Records'
      },
      subtitle: {
        text: 'Maximum marks in subjects'
      },
      accessibility: {
        announceNewData: {
          enabled: true
        }
      },
      xAxis: {
        type: 'category'
      },
      yAxis: [{
        className: 'highcharts-color-0',
        title: {
            text: 'Primary axis'
        }
    }, {
        className: 'highcharts-color-1',
        opposite: true,
        title: {
            text: 'Secondary axis'
        }
    }],
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          },
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: "subjects",
        data: [10, 30, 20, 40, 90]
    }, {
        name: "users",
        data: [10, 20, 40, 60, 80],
        yAxis: 1
    }]

      // series: [
      //   {
      //     name: "Subjects",
      //     colorByPoint: true,
      //     data: [
      //       {
      //         name: "English",
      //         y: 90,
      //         drilldown: "English"
      //       },
      //       {
      //         name: "Maths",
      //         y: 80,
      //         drilldown: "Maths"
      //       },
      //       {
      //         name: "Science",
      //         y: 70,
      //         drilldown: "Science"
      //       },
      //       {
      //         name: "",
      //         // y: 0,
      //         drilldown: ""
      //       },
      //     ]
      //   },
      //   {
      //     name: "Users",
      //     colorByPoint: true,
      //     data: [
      //       {
      //         name: "username",
      //         y: 60,
      //         drilldown: "username"
      //       },
      //       {
      //         name: "username",
      //         y: 70,
      //         drilldown: "username"
      //       },
      //       {
      //         name: "username",
      //         y: 90,
      //         drilldown: "username"
      //       },
      //       {
      //         name: "",
      //         // y: 0,
      //         drilldown: ""
      //       },
      //     ]
      //   }
      // ],
      
    }
  }

}

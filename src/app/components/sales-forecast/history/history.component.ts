import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  columnDefinitions: Column[] = [];
  gridOptions: GridOption = {};
  dataset: any[] = [];
  startDate : Date;

  constructor() { 
   this.startDate = new Date(2019, 0, 1)
  }

  ngOnInit(): void {
    this.columnDefinitions = [
      { id: 'week1', name: this.generateColumnHeader(1), field: 'week1', sortable: false },
      { id: 'week2', name: this.generateColumnHeader(2), field: 'week2', sortable: false },
      { id: 'week3', name: this.generateColumnHeader(3), field: 'week3', sortable: false },
      { id: 'week4', name: this.generateColumnHeader(4), field: 'week4', sortable: false }
    ];
    this.gridOptions = {
      enableAutoResize: true,       // true by default
      enableCellNavigation: true,
      enablePagination: true
    };

    // fill the dataset with your data
    // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset
    this.dataset = [];

    // for demo purpose, let's mock a 1000 lines of data
    for (let i = 0; i < 10; i++) {
      this.dataset[i] = {
        id:i,
        week1: 'Week1-Test' + i,
        week2: 'Week2-Test' + i,
        week3: 'Week3-Test' + i,
        week4: 'Week4-Test' + i
      };
    }
  }

  generateColumnHeader(weeknumber:number): string {
    var numWeek = 1;
    var maxWeeks = 4;
    var weekday = new Array(7);
    weekday[0] = "Monday"; weekday[1] = "Tuesday"; weekday[2] = "Wednesday"; weekday[3] = "Thursday";
    weekday[4] = "Friday"; weekday[5] = "Saturday"; weekday[6] = "Sunday";
    var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let htmlString = '<div><table><tr>';
    debugger;
    var dayOfWeek = this.startDate.getDay();
    htmlString += '<td colspan="' + (6 - dayOfWeek) + '">' + 'Week ' + weeknumber + '</td></tr>';
    htmlString += '<tr><td colspan="' + (6 - dayOfWeek) + '">' 
                  + this.startDate.getDate() + '-'
                  + months[this.startDate.getMonth()] + '-'
                  + this.startDate.getFullYear() + '</td></tr>';
    htmlString += '<tr>';
    for (let j = 0; j <= 6 - dayOfWeek; j++) {
      htmlString += '<td>' + weekday[j].substring(0,1) + '</td>';
      this.startDate.setDate(this.startDate.getDate() + 1);
    }
    htmlString += '</tr></table></div>';

    return htmlString;
  }

}

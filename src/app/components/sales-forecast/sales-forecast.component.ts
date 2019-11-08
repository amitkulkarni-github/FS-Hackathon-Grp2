import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { SalesHistory, Week, Year, Month } from 'src/app/models/Models'
import { HistoryService } from 'src/app/services/history/history.service'
import { StaticDetailsService } from 'src/app/services/static-details/static-details.service'
import { StaticDetail, Product, Channel } from 'src/app/models/Models'
import { HistoryComponent } from 'src/app/components/history/history.component'
import * as moment from 'moment';

@Component({
  selector: 'app-sales-forecast',
  templateUrl: './sales-forecast.component.html',
  styleUrls: ['./sales-forecast.component.css']
})
export class SalesForecastComponent implements OnInit {
  dataset: any[] = [];
  startDate: Date;
  products: Product[]
  channels: Channel[]
  historyYears: Year[] = []
  forecastYears: Year[] = []
  historyYearNumbers: number[] = [2014, 2015, 2016, 2017]
  forecastYearNumbers: number[] = [2020, 2021, 2022, 2023, 2024, 2025]
  selectedHistoryYear: Year = new Year();
  selectedHistoryWeek: Week = new Week();
  historyWeekCount: number = 0;
  selectedChannel: Channel = new Channel();
  selectedProduct: Product = new Product();
  selectedForecastYear: Year = new Year();
  selectedForecastWeek: Week = new Week();
  forecastWeekCount: number = 0;

  historyEndDate: Date = new Date("10/31/2019");

  showHistorySection: boolean;
  salesHistory: SalesHistory[] = []
  filteredHistory: SalesHistory[] = []
  historyWeeks: Week[] = []
  historyMonths:Month[] = []
  filteredHistoryYears: Year[] = []
  monthNames:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  @ViewChild('historyContainer', { static: true, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private route: ActivatedRoute,
    private router: Router, private historyService: HistoryService,
    private staticDetailsService: StaticDetailsService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    // get product list from service
    this.staticDetailsService.getProducts().subscribe(result => {
      this.products = result;
    });

    // get channel list from service
    this.staticDetailsService.getChannels().subscribe(result => {
      this.channels = result;
    });

    this.setHistoryYearsAndWeeks();
    this.setForecastYearsAndWeeks();

  }

  showHistoryPage() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(HistoryComponent);
    this.viewContainerRef.clear();
    const ref = <HistoryComponent>this.viewContainerRef.createComponent(factory).instance;
    ref.someProp = 'Hello world';
    //ref.changeDetectorRef.detectChanges();
  }

  setHistoryYearsAndWeeks() {
    //prepare dataset for the past years with weeks to select as history start 
    for (let i = 0; i < this.historyYearNumbers.length; i++) {
      let _newYear = new Year();
      _newYear.year = this.historyYearNumbers[i];
      var _year = moment().year(this.historyYearNumbers[i]);
      var _weeksInYear = _year.isoWeeksInYear();
      var _yearStartDate = _year.startOf('year');
      for (let j = 1; j <= _weeksInYear; j++) {
        var _newWeek = new Week();
        _newWeek.startDate = _yearStartDate.toString();
        _newWeek.number = j;
        _yearStartDate.days(7);
        _newYear.weeks.push(_newWeek);
      }
      this.historyYears.push(_newYear);
    }
  }

  setForecastYearsAndWeeks() {
    //prepare dataset for the past years with weeks to select as history start 
    for (let i = 0; i < this.forecastYearNumbers.length; i++) {
      let _newYear = new Year();
      _newYear.year = this.forecastYearNumbers[i];
      var _year = moment().year(this.forecastYearNumbers[i]);
      var _weeksInYear = _year.isoWeeksInYear();
      var _yearStartDate = _year.startOf('year');
      for (let j = 1; j <= _weeksInYear; j++) {
        var _newWeek = new Week();
        _newWeek.startDate = _yearStartDate.toString();
        _newWeek.number = j;
        _yearStartDate.days(7);
        _newYear.weeks.push(_newWeek);
      }
      this.forecastYears.push(_newYear);
    }
  }

  onYearChange($event, year) {
    //this.selectedYear = year;
    //alert(this.selectedYear.year);

  }


  showHistory(): void {
    this.filteredHistoryYears = [];
    this.showHistorySection = true;
    // get history from database through service
    this.historyService.GetSalesHistory().then((result: SalesHistory[]) => {
      this.salesHistory = result;
    });
    let oldWeekNum = -1, newWeekNum = -1;
    let oldYearNum = -1, newYearNum = -1;
    let oldMonthNum = -1, newMonthNum = -1;
    let newWeek = new Week();
    let newYear = new Year();
    let newMonth = new Month();
    var weekday = new Array(7);
    weekday[1] = "Monday"; weekday[2] = "Tuesday"; weekday[3] = "Wednesday"; weekday[4] = "Thursday";
    weekday[5] = "Friday"; weekday[6] = "Saturday"; weekday[7] = "Sunday";

    debugger;
    let _filterStartDate = moment(this.selectedHistoryWeek.startDate);
    let _filterEndDate = moment(this.selectedHistoryWeek.startDate).add(this.historyWeekCount, 'w');
    for (let i = 0; i < this.salesHistory.length; i++) {
      if (moment(this.salesHistory[i].dateOfSale).isBetween(_filterStartDate, _filterEndDate))
        this.filteredHistory.push(this.salesHistory[i]);
    }

    debugger;
    //divide sales history into weeks and show summed up units sold in each week
    for (let i = 0; i < this.filteredHistory.length; i++) {
      oldYearNum = moment(this.filteredHistory[i].dateOfSale).year();
      if (oldYearNum != newYearNum) {
        newYearNum = oldYearNum;
        newYear = new Year();
        newYear.year = oldYearNum;
        this.filteredHistoryYears.push(newYear);
      }

      //prepare monthly summary for history data
      oldMonthNum = moment(this.filteredHistory[i].dateOfSale).month();
      newYear.months[oldMonthNum].unitsSold += this.filteredHistory[i].unitsSold;
      

      oldWeekNum = moment(this.filteredHistory[i].dateOfSale).isoWeek()

      if (oldWeekNum != newWeekNum) {
        newWeekNum = oldWeekNum
        newWeek = new Week()
        newWeek.startDate = this.filteredHistory[i].dateOfSale
        newWeek.number = moment(this.filteredHistory[i].dateOfSale).isoWeek()
        newWeek.unitsSold = this.filteredHistory[i].unitsSold
        newWeek.days.push(moment(this.filteredHistory[i].dateOfSale).format('dddd').substring(0, 1))
        newWeek.numberOfDays += 1
        newYear.numberOfWeeks += 1
        newYear.weeks.push(newWeek)
      }
      else {
        newWeek.unitsSold += this.filteredHistory[i].unitsSold
        newWeek.numberOfDays += 1
        newWeek.days.push(moment(this.filteredHistory[i].dateOfSale).format('dddd').substring(0, 1))
      }

    }
    debugger;
  }


}

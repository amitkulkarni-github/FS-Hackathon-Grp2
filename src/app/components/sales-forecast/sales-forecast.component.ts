import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import {HttpHeaders} from '@angular/common/http'
import * as models from 'src/app/models/Models'
import { ForecastService } from 'src/app/services/forecast/forecast.service'
import { StaticDetailsService } from 'src/app/services/static-details/static-details.service'
import * as moment from 'moment';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import * as _ from "lodash";
import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-sales-forecast',
  templateUrl: './sales-forecast.component.html',
  styleUrls: ['./sales-forecast.component.css']
})
export class SalesForecastComponent implements OnInit {
  
  //dropdowns
  channels: models.Channel[];
  historyYears: models.Year[] = [];
  forecastYears: models.Year[] = [];
  products:models.Product[] = [];
  //constant values
  staticDetails:models.StaticDetail;

  // values selected by the user
  selectedChannel: models.Channel = new models.Channel();
  selectedProduct: models.Product = new models.Product();
  selectedHistoryYear: models.Year = new models.Year();
  selectedHistoryWeek: models.Week = new models.Week();
  selectedForecastYear: models.Year = new models.Year();
  selectedForecastWeek: models.Week = new models.Week();
  selectedForecastMethod: models.ForecastMethod = new models.ForecastMethod();
  historyWeekCount: number = 0;
  forecastWeekCount: number = 0;

  //switch for showing the details section
  showHistorySection: boolean;
  //object holding history and forecast data
  salesDataCollection:models.SalesDataCollection = new models.SalesDataCollection();
  //subset of 
  filteredHistory: models.SalesData[] = [];
  historyWeeks: models.Week[] = [];
  historyMonths: models.Month[] = [];
  filteredHistoryYears: models.Year[] = [];
  filteredHistoryWeeks: models.Week[] = [];
  filteredForecastWeeks: models.Week[] = [];

  displayHistoryWeeks: models.Week[] = [];
  summaryForecastMonths: models.Month[] = [];
  displayForecastMonths: models.Month[] = [];
  displayForecastWeeks: any[];
  filteredForecastYears: any[];

  historyPaginators: models.Paginator[] = [];
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;

  _paginator: MatPaginator;
  
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  };

  constructor(private route: ActivatedRoute,
    private router: Router, private forecastService: ForecastService,
    private staticDetailsService: StaticDetailsService,
    private componentFactoryResolver: ComponentFactoryResolver) { 
      this.staticDetails = new models.StaticDetail();
    }

  ngOnInit() {

    this.getStaticDetails();
    this.setHistoryYearsAndWeeks();
    this.setForecastYearsAndWeeks();

  }

  async getStaticDetails(){
// get channels, forecast methods from service
    // channel has products....products dropdown will dynamically load based on channel selection
    this.staticDetails = await this.staticDetailsService.getStaticDetails();
    
  }

  onChange(event){
    this.products = [];
    let _channelProducts = this.staticDetails.channelProducts.filter(a=>{
      if(a.channelId == event.channelId)
      return a;

    })
    for(let i=0;i<_channelProducts.length;i++){
      let _product = this.staticDetails.products.filter(a => {
        if(a.id == _channelProducts[i].productId)
        this.products.push(a)
      });
    }
  }
  setHistoryYearsAndWeeks() {
    //prepare dataset for the past years with weeks to select as history start 
    for (let i = 0; i < this.staticDetails.historyYearNumbers.length; i++) {
      let _newYear = new models.Year();
      _newYear.year = this.staticDetails.historyYearNumbers[i];
      var _year = moment().year(this.staticDetails.historyYearNumbers[i]);
      var _weeksInYear = _year.isoWeeksInYear();
      var _yearStartDate = _year.startOf('year');
      for (let j = 1; j <= _weeksInYear; j++) {
        var _newWeek = new models.Week();
        _newWeek.startDate = _yearStartDate.startOf('week').format('L');
        _newWeek.number = j;
        _yearStartDate.days(7);
        _newYear.weeks.push(_newWeek);
      }
      this.historyYears.push(_newYear);
    }
  }

  setForecastYearsAndWeeks() {
    //prepare dataset for the past years with weeks to select as history start 
    for (let i = 0; i < this.staticDetails.forecastYearNumbers.length; i++) {
      let _newYear = new models.Year();
      _newYear.year = this.staticDetails.forecastYearNumbers[i];
      var _year = moment().year(this.staticDetails.forecastYearNumbers[i]);
      var _weeksInYear = _year.isoWeeksInYear();
      var _yearStartDate = _year.startOf('year');
      for (let j = 1; j <= _weeksInYear; j++) {
        var _newWeek = new models.Week();
        _newWeek.startDate = _yearStartDate.toString();
        _newWeek.number = j;
        _yearStartDate.days(7);
        _newYear.weeks.push(_newWeek);
      }
      this.forecastYears.push(_newYear);
    }
  }

  resetFormData(){
    this.selectedChannel = new models.Channel();
    this.selectedProduct  = new models.Product();
    this.selectedHistoryYear = new models.Year();
    this.selectedHistoryWeek = new models.Week();
    this.selectedForecastYear = new models.Year();
    this.selectedForecastWeek = new models.Week();
    this.selectedForecastMethod = new models.ForecastMethod();
    this.historyWeekCount = 0;
    this.forecastWeekCount = 0;
  }
  async showHistory() {
    let _inputParams = new models.InputParams();
    _inputParams.channelId = this.selectedChannel.channelId;
    _inputParams.productId = this.selectedProduct.id;
    _inputParams.historyStartDate = new Date(moment(this.selectedHistoryWeek.startDate).format(moment.HTML5_FMT.DATE));
    _inputParams.historyEndDate = new Date(moment(this.selectedHistoryWeek.startDate).add(this.historyWeekCount, 'w').format(moment.HTML5_FMT.DATE));
    _inputParams.forecastStartDate = new Date(moment(this.selectedForecastWeek.startDate).format(moment.HTML5_FMT.DATE));
    _inputParams.forecastEndDate = new Date(moment(this.selectedForecastWeek.startDate).add(this.forecastWeekCount, 'w').format(moment.HTML5_FMT.DATE));

    
    var requestData=[];
    
    await this.forecastService.GetHistory(_inputParams).then(result => {
      this.salesDataCollection = result;
    });

    this.processData('H');
    this.processData('F');
    this.processMonthlyForecastSummary();
    this.setDisplayHistoryWeeks(0);
    this.setDisplayForecastWeeks(0);
    this.setDisplaySummaryMonths(0);
  }

  processData(mode:string){
    this.filteredHistoryYears = [];
    this.showHistorySection = true;
    let oldWeekNum = -1, newWeekNum = -1;
    let oldYearNum = -1, newYearNum = -1;
    let oldMonthNum = -1, newMonthNum = -1;
    let newWeek = new models.Week();
    let newYear = new models.Year();
    let newMonth = new models.Month();
    let _weekSrNumber = 0;
    let _salesDataArray = [];
    let _filteredYears = [];
    let _filteredWeeks = [];
    let _displayWeeks = [];

    if(mode == 'H'){
      //_salesDataArray = this.salesDataCollection.historyDetails;
    }
    else{
      //_salesDataArray = this.salesDataCollection.forecastMap;
    }

    //divide sales history into weeks and show summed up units sold in each week
    for (let i = 0; i < _salesDataArray.length; i++) {
      oldYearNum = moment(_salesDataArray[i].date).year();
      if (oldYearNum != newYearNum) {
        newYearNum = oldYearNum;
        newYear = new models.Year();
        newYear.year = oldYearNum;
        _filteredYears.push(newYear);
      }

      //prepare monthly summary for history data
      oldMonthNum = moment(_salesDataArray[i].date).month();
      newYear.months[oldMonthNum].units += _salesDataArray[i].units;


      oldWeekNum = moment(_salesDataArray[i].date).isoWeek()

      if (oldWeekNum != newWeekNum) {
        newWeekNum = oldWeekNum
        newWeek = new models.Week()
        newWeek.startDate = _salesDataArray[i].date
        newWeek.number = moment(_salesDataArray[i].date).isoWeek()
        newWeek.units = _salesDataArray[i].units
        newWeek.days.push(moment(_salesDataArray[i].date).format('dddd').substring(0, 1))
        newWeek.dates.push(moment(_salesDataArray[i].date).format('D'))
        newWeek.numberOfDays += 1
        newWeek.serialNumber = ++_weekSrNumber;
        newYear.numberOfWeeks += 1
        newYear.weeks.push(newWeek)
      }
      else {
        newWeek.units += _salesDataArray[i].units
        newWeek.numberOfDays += 1
        newWeek.dates.push(moment(_salesDataArray[i].date).format('D'))
        newWeek.days.push(moment(_salesDataArray[i].date).format('dddd').substring(0, 1))
      }

    }

    for (let i = 0; i < _filteredYears.length; i++) {
      for (let j = 0; j < _filteredYears[i].weeks.length; j++) {
        _filteredWeeks.push(_filteredYears[i].weeks[j]);
      }
    }

    _displayWeeks = [];
    for (let i = 0; i < this.staticDetails.defaultItemsToView; i++) {
      _displayWeeks.push(_filteredYears[0].weeks[i])
    }
    
    if(mode == 'H'){
      this.displayHistoryWeeks = _displayWeeks;
      this.filteredHistoryYears = _filteredYears;
      this.filteredHistoryWeeks = _filteredWeeks;
    }
    else{
      this.displayForecastWeeks = _displayWeeks;
      this.filteredForecastYears = _filteredYears;
      this.filteredForecastWeeks = _filteredWeeks;
    }
  }

  processMonthlyForecastSummary() {
    
    let _groupedMonths = _.groupBy(this.salesDataCollection, 
      (result) => moment(result['date']).startOf('month'))
      ;
    let _months =  _.toArray(_groupedMonths);
    
    for(let i=0;i<_months.length;i++){
      let newMonth = new models.Month();
      for(let j=0; j< _months[i].length;j++){
        newMonth.units += _months[i][j]['units'];
        newMonth.name = moment(_months[i][j]['date']).format('MMM');
        newMonth.year = moment(_months[i][j]['date']).year();
      }
      this.summaryForecastMonths.push(newMonth);
    }
  }

  historyPaginatorEvent(event) {
    this.setDisplayHistoryWeeks(event.pageIndex);
  }

  setDisplayHistoryWeeks(start:number){
    this.displayHistoryWeeks = [];
    let _startWeek = start * this.staticDetails.defaultItemsToView;
    let _endWeek = _startWeek + this.staticDetails.defaultItemsToView;
    if (_endWeek > this.filteredHistoryWeeks.length)
      _endWeek = this.filteredHistoryWeeks.length;
    this.displayHistoryWeeks = this.filteredHistoryWeeks.slice(_startWeek, _endWeek);
  }

  forecastPaginatorEvent(event) {
    this.setDisplayForecastWeeks(event.pageIndex);
  }

  setDisplayForecastWeeks(start:number){
    this.displayForecastWeeks = [];
    let _startWeek = start * this.staticDetails.defaultItemsToView;
    let _endWeek = _startWeek + this.staticDetails.defaultItemsToView;
    if (_endWeek > this.filteredForecastWeeks.length)
      _endWeek = this.filteredForecastWeeks.length;
    this.displayForecastWeeks = this.filteredForecastWeeks.slice(_startWeek, _endWeek);
  }

  summaryPaginatorEvent(event) {
    this.setDisplaySummaryMonths(event.pageIndex);
  }

  setDisplaySummaryMonths(start:number){
    this.displayForecastMonths = [];
    let _startMonth = start * this.staticDetails.defaultItemsToView;
    let _endMonth = _startMonth + this.staticDetails.defaultItemsToView;
    if (_endMonth > this.summaryForecastMonths.length)
      _endMonth = this.summaryForecastMonths.length;
    this.displayForecastMonths = this.summaryForecastMonths.slice(_startMonth, _endMonth);
  }

}

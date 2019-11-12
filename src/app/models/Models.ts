import * as moment from 'moment';

export class Channel {
    channelId: string
    channel: string
    descritption: string
    products: Product[]

    constructor() {
        this.products = [];
    }
}
export class Product {
    id: string
    name: string
    brand: string
    type: number
}

export class ChannelProduct{
    id:string;
    channelId:string;
    productId:string;
}

export class ForecastMethod {
    id: string
    name: string
}


export class StaticDetail {
    channels: Channel[]
    products:Product[]
    channelProducts:ChannelProduct[]
    forecastMethods:ForecastMethod[]
    historyCutOffDate:Date
    defaultItemsToView:number
    historyYearNumbers:number[]
    forecastYearNumbers:number[]

    constructor(){
        this.channels = [];
        this.products = [];
        this.channelProducts = [];
        this.forecastMethods = [];
        this.historyCutOffDate = new Date("10/31/2019");
        this.historyYearNumbers = [2014, 2015, 2016, 2017];
        this.forecastYearNumbers = [2020, 2021, 2022, 2023, 2024, 2025];
        this.defaultItemsToView = 4;
    }

}

export class InputParams {
    historyStartDate: Date
    historyEndDate: Date
    forecastStartDate: Date
    forecastEndDate: Date
    productId: string
    channelId: string
    forecastMethodId:string
}

export class SalesDataCollection{
    history:SalesData[];
    forecast:ForecastMap[];
    constructor(){
        this.history = [];
        this.forecast = [];
    }
}

export class ForecastMap{
    methodId:string;
    data:SalesData[];
    constructor(){
        this.data = [];
    }

}

export class ForecastMethodWeekMap{
    methodId:string;
    weeks:Week[];
    constructor(){
        this.weeks = [];
    }
}

export class MethodWeekMap{
    
}

export class SalesData {
    id: string
    productId: string
    channelId: string
    date: string
    units: number
}

export class Week {
    number: number
    startDate: string
    days: string[]
    units: number
    numberOfDays: number
    serialNumber: number
    dates: string[]

    constructor() {
        this.days = [];
        this.dates = [];
        this.numberOfDays = 0;
    }
}

export class Year {
    year: number
    weeks: Week[]
    months: Month[]
    numberOfWeeks: number
    constructor() {
        this.weeks = [];
        this.months = [];
        for (let i = 0; i < 12; i++) {
            var _month = new Month();
            _month.number = i;
            _month.name = moment().month(i).format('MMMM');
            _month.units = 0;
            this.months.push(_month);
        }
        this.numberOfWeeks = 0;
    }
}

export class Month {
    number: number
    units: number
    name: string
    year:number
    constructor(){
        this.units = 0;
    }
}

export class Paginator {

    srNumber: number;
    startYear: number;
    endYear: number;
    startWeek: number;
    endWeek: number;
}
import * as moment from 'moment';

export class Product{
    id:number
    name:string
    brand:string
    type:number
}

export class Channel{
    id:number
    name:string
    descritption:string
}

export class StaticDetail
{
    products:Product[]
    channels:Channel[]
}

export class InputParams{
    historyStartDate:Date
    historyWeeks:number
    forecastStartDate:Date
    forecastWeeks:number
    productId:number
    channelId:number
}

export class SalesHistory{
    id:number
    productId:number
    channelId:number
    dateOfSale:string
    unitsSold:number
}

export class Week{
    number:number
    startDate:string
    days:string[]
    unitsSold:number
    numberOfDays:number

    constructor(){
        this.days = [];
        this.numberOfDays = 0;
    }
}

export class Year{
    year:number
    weeks:Week[]
    months:Month[]
    numberOfWeeks:number
    constructor(){
        this.weeks = [];
        this.months = [];
        for(let i=0;i<12;i++)
        {
            var _month = new Month();
            _month.number = i;
            _month.name = moment().month(i).format('MMMM');
            _month.unitsSold = 0;
            this.months.push(_month);
        }
        this.numberOfWeeks = 0;
    }
}

export class Month{
    number:number
    unitsSold:number
    name:string
}
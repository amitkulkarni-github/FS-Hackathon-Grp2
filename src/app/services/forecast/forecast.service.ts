import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as models from 'src/app/models/Models'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public async GetHistory() : Promise<models.SalesData[]>{
    var result = await this.http.get<models.SalesData[]>('assets/sales.json').toPromise()
    return result;
  }

  public async GetForecast() : Promise<models.SalesData[]>{
    var result = await this.http.get<models.SalesData[]>('assets/forecast.json').toPromise()
    return result;
  }

  
}

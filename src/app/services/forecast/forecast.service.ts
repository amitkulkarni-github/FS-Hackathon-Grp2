import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as models from 'src/app/models/Models'
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public async GetHistory(params: models.InputParams): Promise<models.SalesDataCollection> {
    let _inputParams = {
      "channelId": params.channelId,
      "productId": params.productId,
      "historyStartDate": "2014-01-01",//moment(params.historyStartDate).format(moment.HTML5_FMT.DATE),
      "historyEndDate": "2018-12-01",//moment(params.historyEndDate).format(moment.HTML5_FMT.DATE),
      "forecastStartDate": "2020-01-01",//moment(params.forecastStartDate).format(moment.HTML5_FMT.DATE),
      "forecastEndDate": "2022-04-01",//moment(params.forecastEndDate).format(moment.HTML5_FMT.DATE)
    }

    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    var result = await this.http.post<models.SalesDataCollection>('https://mnrc.herokuapp.com/forecast', _inputParams, httpOptions).toPromise();
    return result;
  }
}

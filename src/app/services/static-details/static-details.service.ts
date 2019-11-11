import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as model from 'src/app/models/Models'
@Injectable({
  providedIn: 'root'
})
export class StaticDetailsService {

  constructor(private http: HttpClient) { }

  public async  getStaticDetails(): Promise<model.StaticDetail>{
    let _staticDetails = new model.StaticDetail();
    this.http.get<model.Channel[]>('http://localhost:8080/channels').subscribe(result => {
      _staticDetails.channels = result;
    });
    this.http.get<model.ChannelProduct[]>('http://localhost:8080/channelProducts').subscribe(result => {
      _staticDetails.channelProducts =result;
    });
    this.http.get<model.Product[]>('http://localhost:8080/products').subscribe(result => {
      _staticDetails.products = result;
    })

    this.http.get<model.ForecastMethod[]>('http://localhost:8080/forecastMethods').subscribe(result => {
      _staticDetails.forecastMethods = result;
    })
    return _staticDetails;
  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StaticDetail, Product, Channel, SalesHistory} from 'src/app/models/Models'
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  public async   GetSalesHistory() : Promise<SalesHistory[]>{
    var result = await this.http.get<SalesHistory[]>('assets/sales.json').toPromise()
    return result;
    
  }
}

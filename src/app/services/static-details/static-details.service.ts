import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StaticDetail, Product, Channel} from 'src/app/models/Models'
@Injectable({
  providedIn: 'root'
})
export class StaticDetailsService {

  constructor(private http: HttpClient) { }

  public getProducts() :Observable<Product[]>{
    return this.http.get<Product[]>('assets/products.json');
  }

  public getChannels() :Observable<Channel[]>{
    return this.http.get<Channel[]>('assets/channels.json');
  }

  
}

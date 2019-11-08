import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import {SalesHistory, Week, Year} from 'src/app/models/Models'
import {HistoryService} from 'src/app/services/history/history.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  @Input('someProp') someProp;
  salesHistory : SalesHistory[] = []
  historyWeeks : Week[] = []

  constructor(private historyService:HistoryService) { }

  ngOnInit() {
  }

}

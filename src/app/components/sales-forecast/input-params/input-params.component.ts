import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-params',
  templateUrl: './input-params.component.html',
  styleUrls: ['./input-params.component.css']
})
export class InputParamsComponent implements OnInit {

  myDatepicker : Date
  constructor() { }

  ngOnInit() {
  }

}

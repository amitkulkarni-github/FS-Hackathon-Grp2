import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesForecastComponent } from './components/sales-forecast/sales-forecast.component';
import { InputParamsComponent } from './components/sales-forecast/input-params/input-params.component';
import { HistoryComponent } from './components/sales-forecast/history/history.component';
import { ForecastComponent } from './components/sales-forecast/forecast/forecast.component';
import { SummaryComponent } from './components/sales-forecast/summary/summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { AngularSlickgridModule } from 'angular-slickgrid';

@NgModule({
  declarations: [
    AppComponent,
    SalesForecastComponent,
    InputParamsComponent,
    HistoryComponent,
    ForecastComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    AngularSlickgridModule.forRoot()
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

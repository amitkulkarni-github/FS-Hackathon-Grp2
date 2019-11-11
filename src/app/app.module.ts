import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesForecastComponent } from './components/sales-forecast/sales-forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule, MatIconModule, MatSidenavModule, 
  MatListModule, MatButtonModule, MatNativeDateModule,MatTooltipModule
,
MatPaginatorModule} from '@angular/material';
import { AngularSlickgridModule } from 'angular-slickgrid';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    SalesForecastComponent,
    AboutComponent
      ],
  imports: [
    BrowserModule,NgxChartsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,MatPaginatorModule,
    AngularSlickgridModule.forRoot(),HttpClientModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

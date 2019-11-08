import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesForecastComponent } from 'src/app/components/sales-forecast/sales-forecast.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: SalesForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

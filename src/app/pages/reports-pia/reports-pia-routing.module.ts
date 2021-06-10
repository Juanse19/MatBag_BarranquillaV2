import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsPiaComponent } from './reports-pia.component';
import { BaggagedataComponent } from './baggagedata/baggagedata.component';
import { PhotoelectricComponent } from './photoelectric/photoelectric.component';
import { BhsFaultsComponent } from './bhs-faults/bhs-faults.component';
import { BhsEventsComponent } from './bhs-events/bhs-events.component';
import { EdsstatisticsComponent } from './edsstatistics/edsstatistics.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsPiaComponent,
    children: [
      {
        path: 'baggagedata',  
        component: BaggagedataComponent, 
      },
      {
        path: 'bag',  
        component: PhotoelectricComponent, 
      },
      {
        path: 'bhsfaults',  
        component: BhsFaultsComponent, 
      },
      {
        path: 'bhsevents',  
        component: BhsEventsComponent, 
      },
      {
        path: 'edsstatistics',  
        component: EdsstatisticsComponent, 
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsPiaRoutingModule { } 

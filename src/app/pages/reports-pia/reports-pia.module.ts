import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NbCardModule,  NbDatepickerModule, NbIconModule, NbInputModule, NbTreeGridModule, NbTabsetModule, NbTooltipModule, NbPopoverModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';  
import { ReportsPiaRoutingModule } from './reports-pia-routing.module';
import { ReportsPiaComponent } from './reports-pia.component';
import { BaggagedataComponent } from './baggagedata/baggagedata.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { PhotoelectricComponent } from './photoelectric/photoelectric.component';
import { BhsFaultsComponent } from './bhs-faults/bhs-faults.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { BhsEventsComponent } from './bhs-events/bhs-events.component';
import { EdsstatisticsComponent } from './edsstatistics/edsstatistics.component';
import { AtrperformanceComponent } from './atrperformance/atrperformance.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';


@NgModule({
  declarations: [ReportsPiaComponent, BaggagedataComponent, PhotoelectricComponent, BhsFaultsComponent, BhsEventsComponent, EdsstatisticsComponent, AtrperformanceComponent,],
  imports: [
    CommonModule,
    ReportsPiaRoutingModule,
    Ng2SmartTableModule,
    NbCardModule, 
    NbIconModule, 
    NbInputModule, 
    ThemeModule,
    GridModule,
    DropDownListAllModule,
    ToolbarModule,
    DateTimePickerModule,
    NbDatepickerModule,
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService],
})
export class ReportsPiaModule { }

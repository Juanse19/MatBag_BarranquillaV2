import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveyorRoutingModule } from './conveyor-routing.module';
import { NbCardModule, 
         NbButtonModule, 
         NbIconModule, 
         NbInputModule,
         NbSpinnerModule,
         NbTreeGridModule, 
         NbTabsetModule, 
         NbTooltipModule, 
         NbPopoverModule, 
         NbSelectModule, 
         NbDatepickerModule, 
         NbCheckboxModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';  
import { ConveyorComponent } from './conveyor.component';
import { TeamComponent } from './team/team.component';
import { FunctioningComponent } from './functioning/functioning.component';
import { AccumulationComponent } from './accumulation/accumulation.component';
import { AssignComponent } from './assign/assign.component';
import { InfoComponent } from './info/info.component'; 
import { Bhs1Component } from './bhs1/bhs1.component';
import { Bhs2Component } from './bhs2/bhs2.component';
import { Bhs3Component } from './bhs3/bhs3.component';
import { Bhs4Component } from './bhs4/bhs4.component';
import { Bhs5Component } from './bhs5/bhs5.component';
import { Bhs6Component } from './bhs6/bhs6.component';
import { Bhs7Component } from './bhs7/bhs7.component';
import { Bhs8Component } from './bhs8/bhs8.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
// import {DxSchedulerModule} from 'devextreme-angular';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { Ib1Component } from './ib1/ib1.component';
import { Ib2Component } from './ib2/ib2.component';
import { Ib3Component } from './ib3/ib3.component';
import { Bhs9Component } from './bhs9/bhs9.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule } from '@angular/forms';
import { WindowFormComponent } from './scheduler/window-form/window-form.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Bhs10Component } from './bhs10/bhs10.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { WindowComponent } from './window/window.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { EnergyComponent } from './energy/energy.component';
import { SolarComponent } from './solar/solar.component';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { ElectricityComponent } from './electricity/electricity.component';
import { ElectricityChartComponent } from './electricity/electricity-chart/electricity-chart.component';
import { ConsumZoneComponent } from './consum-zone/consum-zone.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ProgressBarAllModule } from '@syncfusion/ej2-angular-progressbar';


@NgModule({
  declarations: [
    TeamComponent, 
    FunctioningComponent,
    ConveyorComponent,
    AccumulationComponent,
    AssignComponent,
    InfoComponent,
    Bhs1Component,
    Bhs2Component,
    Bhs3Component,
    Bhs4Component,
    Bhs5Component,
    Bhs6Component,
    Bhs7Component,
    Bhs8Component,
    SchedulerComponent,
    Ib1Component,
    Ib2Component,
    Ib3Component,
    Bhs9Component,
    WindowFormComponent,
    Bhs10Component,
    WindowComponent,
    EnergyComponent,
    SolarComponent,
    ElectricityComponent,
    ElectricityChartComponent,
    ConsumZoneComponent,
  ],
  imports: [
    CommonModule,
    ConveyorRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    // ThemeModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    ThemeModule, 
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    // DxSchedulerModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    FormsModule,
    NbTooltipModule,
    NbPopoverModule,
    GridModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbDatepickerModule.forRoot(),
    DropDownListAllModule,
    NbCheckboxModule,
    DateTimePickerModule,
    DialogModule,
    ChartModule,
    DatePickerModule,
    // DashboardModule,
    NbButtonModule,
    NgxEchartsModule,
    NbSpinnerModule,
    DropDownListModule,
    ProgressBarAllModule,
  ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService,
    CategoryService, LineSeriesService]
})
export class ConveyorModule { }

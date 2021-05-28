import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveyorRoutingModule } from './conveyor-routing.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbTabsetModule, NbTooltipModule, NbPopoverModule } from '@nebular/theme';
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
import {DxSchedulerModule} from 'devextreme-angular';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { Ib1Component } from './ib1/ib1.component';
import { Ib2Component } from './ib2/ib2.component';
import { Ib3Component } from './ib3/ib3.component';



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
  ],
  imports: [
    CommonModule,
    ConveyorRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
    ThemeModule,
    NbTabsetModule,
    Ng2SmartTableModule,
    ThemeModule, 
    NbCardModule,
    NbIconModule,
    NbTabsetModule,
    DxSchedulerModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
    FormsModule,
    NbTooltipModule,
    NbPopoverModule,
  ],
})
export class ConveyorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConveyorRoutingModule } from './conveyor-routing.module';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule, NbTabsetModule } from '@nebular/theme';
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
import { BhsArrivalComponent } from './../dashboard/rooms/bhs-arrival/bhs-arrival.component';
import { DashboardModule } from './../dashboard/dashboard.module';


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
  ],
})
export class ConveyorModule { }

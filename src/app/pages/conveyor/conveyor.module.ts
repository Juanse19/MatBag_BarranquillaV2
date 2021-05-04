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


@NgModule({
  declarations: [
    TeamComponent, 
    FunctioningComponent,
    ConveyorComponent,
    AccumulationComponent,
    AssignComponent,
    InfoComponent,
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

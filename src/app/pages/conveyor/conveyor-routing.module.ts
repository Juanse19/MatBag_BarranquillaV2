import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConveyorComponent } from './conveyor.component';
import { FunctioningComponent } from './functioning/functioning.component';
import { TeamComponent } from './team/team.component';
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

const routes: Routes = [
  {
    path: '',
    component: ConveyorComponent,
    children: [
      {
        path: 'assign',
        component: AssignComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'accumulation',
        component: AccumulationComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
      {
        path: 'functioning',
        component: FunctioningComponent,
      },
      {
        path: 'bhs1',
        component: Bhs1Component,
      },
      {
        path: 'bhs2',
        component: Bhs2Component,
      },
      {
        path: 'bhs3',
        component: Bhs3Component,
      },
      {
        path: 'bhs4',
        component: Bhs4Component,
      },
      {
        path: 'bhs5',
        component: Bhs5Component,
      },
      {
        path: 'bhs6',
        component: Bhs6Component,
      },
      {
        path: 'bhs7',
        component: Bhs7Component,
      },
      {
        path: 'bhs8',
        component: Bhs8Component,
      },
      {
        path: 'scheduler',
        component: SchedulerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConveyorRoutingModule { }

export const routedComponents = [
  ConveyorComponent,
  TeamComponent,
  FunctioningComponent,
  InfoComponent,
];

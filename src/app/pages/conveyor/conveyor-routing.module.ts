import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConveyorComponent } from './conveyor.component';
import { FunctioningComponent } from './functioning/functioning.component';
import { TeamComponent } from './team/team.component';
import { AccumulationComponent } from './accumulation/accumulation.component';
import { AssignComponent } from './assign/assign.component';
import { InfoComponent } from './info/info.component';


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

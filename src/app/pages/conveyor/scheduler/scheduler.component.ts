import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import { Priority, Resource, Appointment, ScheduleService } from './schedule.service';
import { extend } from '@syncfusion/ej2-base';
import {
    TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './data';


@Component({
  selector: 'ngx-scheduler',
  templateUrl: './scheduler.component.html',
  styles: [`    
    .timeline-resource-grouping.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
    }
    .timeline-resource-grouping.e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
    }
    `],
    encapsulation: ViewEncapsulation.None,
    providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
})
export class SchedulerComponent implements OnInit {

  public selectedDate: Date = new Date(2018, 3, 4);
  public group: GroupModel = {
      resources: ['Projects', 'Categories']
  };
  public projectDataSource: Object[] = [
      { text: 'Carrusel 1', id: 1, color: '#cb6bb2' },
      { text: 'Carrusel 2', id: 2, color: '#56ca85' }
  ];
  public categoryDataSource: Object[] = [
      { text: 'LATAM Airlines Colombia', id: 1, groupId: 1, color: '#df5286' },
      { text: 'JetBlue', id: 2, groupId: 1, color: '#7fa900' },
      { text: 'Kish Air', id: 3, groupId: 1, color: '#ea7a57' },
      { text: 'Kunming Airlines', id: 4, groupId: 2, color: '#5978ee' },
      { text: 'LAM', id: 5, groupId: 2, color: '#df5286' },
      { text: 'LOT Polish Airlines', id: 6, groupId: 2, color: '#00bdae' }
  ];
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
      dataSource: <Object[]>extend([], resourceData.concat(timelineResourceData), null, true)
  };

  constructor(  ) { 
    
  }

  ngOnInit(): void {
  }

}

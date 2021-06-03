import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import { Priority, Resource, Appointment, ScheduleService } from './schedule.service';
import { extend } from '@syncfusion/ej2-base';
import {
    TimelineViewsService, AgendaService, GroupModel, EventSettingsModel, ResizeService, DragAndDropService, ScheduleComponent, EventRenderedArgs, WeekService, MonthService, TimelineMonthService, View
} from '@syncfusion/ej2-angular-schedule';
// import { timelineResourceData, resourceData } from './data';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { takeWhile } from 'rxjs/operators';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { Banda5, zons, states, departures } from '../_interfaces/MatBag.model';
import { LocalDataSource } from 'ng2-smart-table';


interface carrusel {
    text: string,
    id: string,
    color: string
}

interface airline {
    text: string,
    id: string,
    groupId: string,
    color: string
}

@Component({
  selector: 'ngx-scheduler',
  templateUrl: './scheduler.component.html',
  styles: [`    
    .timeline-resource-grouping.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
        width: 90px;
        height: 50px;
    }
    .timeline-resource-grouping.e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
        height: 50px;
    }
    `],
    encapsulation: ViewEncapsulation.None,
    // providers: [TimelineViewsService, AgendaService, ResizeService, DragAndDropService]
    providers: [WeekService, MonthService, AgendaService, TimelineViewsService, TimelineMonthService ],
})
export class SchedulerComponent implements OnInit {

    @ViewChild('scheduleObj')

    public scheduleObj: ScheduleComponent;

    public schedules: departures [] = [];

    public car: carrusel [] = [];

    public airline: airline [] = [];

    private alive=true;


    constructor( private http: HttpClient,
        private api: HttpService ) { 
        
      }
    
      ngOnInit(): void {
        //   this.schedulerCharge();
          this.carruselCharge();
          this.airCharge();
          this.open();
      }
    

  public selectedDate: Date = new Date(2021, 5, 3);

  public group: GroupModel = {
      resources: ['Projects', 'Categories']
  };
 
//   public projectDataSource: Object[] = [
//       { text: 'Carrusel 1', id: 83, color: '#cb6bb2' },
//       { text: 'Carrusel 2', id: 92, color: '#56ca85' }
//   ];
//   public categoryDataSource: Object[] = [
//       { text: 'LATAM Airlines Colombia', id: 1, groupId: 83, color: '#df5286' },
//       { text: 'Avianca', id: 146, groupId: 83, color: '#7fa900' },
//       { text: 'JetBlue', id: 147, groupId: 83, color: '#7fa900' },
//       { text: 'Kish Air', id: 3, groupId: 92, color: '#ea7a57' },
//       { text: 'Kunming Airlines', id: 8, groupId: 92, color: '#5978ee' },
//       { text: 'LAM', id: 5, groupId: 83, color: '#df5286' },
//       { text: 'LOT Polish Airlines', id: 6, groupId: 92, color: '#df5286' }
//   ];

  public allowMultiple: Boolean = true;

 private timelineResourceData: DataManager = new DataManager({
    url: 'http://10.100.22.82:1880/timelineResourceData',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
 });

 public airCharge(){
    this.http.get(this.api.apiUrlNode1 + '/GetAir')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: airline[]=[])=>{
      this.airline=res;
      console.log('Airlines:', res  );
    });
  }

 public carruselCharge(){
    this.http.get(this.api.apiUrlNode1 + '/GetMakeUpList')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: carrusel[]=[])=>{
      this.car=res;
      console.log('Carr:', res  );
    });
  }
  
  private resourceData: DataManager = new DataManager({
    url: 'http://10.100.22.82:1880/resourceDatas',
    adaptor: new ODataV4Adaptor,
    crossDomain: true,
 });

  private resourceDatas: DataManager = new DataManager({
    url: 'http://10.100.22.82:1880/resourceData',
    adaptor: new ODataV4Adaptor,
    crossDomain: false,
    // offline: true
 });
  open(){
      this.eventSettings
      console.log('testDivaces', this.eventSettings);
  }

 public eventSettings: EventSettingsModel = {
    dataSource:  this.resourceDatas,
    enableTooltip: true,
    // dataSource: <Object[]>extend(this.resourceData, null, true)
    // fields: {
    //     id: 'Id',
    //     subject: { name: 'Flight', title: 'Vuelo' },
    //     location: { name: 'ICAO' },
    //     description: { name: 'DeviceId' },
    //     startTime: { name: 'STD', title: 'Hora inicio'},
    //     endTime: { name: 'ETD', title: 'Hora fin' },
    // }

};
public currentView: View = 'TimelineMonth';
onActionFailure(): void {
    let span: HTMLElement = document.createElement('span');
    this.scheduleObj.element.parentNode.insertBefore(span, this.scheduleObj.element);
    span.style.color = '#FF0000'
    span.innerHTML = 'Server exception: 404 Not found';
 }

 onEventRendered(args: EventRenderedArgs): void {
    const categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
        return;
    }
    if (this.currentView === 'Agenda') {
        (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
} 

  
}

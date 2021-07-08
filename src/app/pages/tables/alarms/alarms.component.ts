import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/interfaces/common/smart-table';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { NbToastrService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';
import { HttpClient } from '@angular/common/http';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

interface Alarmas {
  Id: number;
  Message: string;
  Level: string;
  Exception: string;
  UserId: string;
  TimeStamp: string;
}

let ALARMAS: Alarmas[] = [


];

@Component({
  selector: 'ngx-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent implements OnDestroy {

  public select = false;
  private alive = true;
  mostrar: Boolean;
  public pageSettings: PageSettingsModel;

  public historyAlarmData: Alarmas[];

  public filterOptions: FilterSettingsModel;

  alarmas = ALARMAS;

  settings = {
    // actions: false,
    actions: {
      add: false,
      edit: false,
      
    },
    delete: {
      deleteButtonContent: '<i class="nb-checkmark-circle"></i>',
      confirmDelete: true,
    },
    
    columns: {
      Id: {
        title: 'ID',
        type: 'number',
        filter: false,
        hide: true,

      },
      Message: {
        title: 'Mensaje',
        type: 'string',
        filter: true,
      },
      Level: {
        title: 'Nivel',
        type: 'string',
        filter: false,
      },
      // exception: {
      //   title: 'excepción',
      //   type: 'string',
      //   filter: false,
      // },
      UserId: {
        title: 'Usuario',
        type: 'string',
        filter: false,
      },
      TimeStamp: {
        title: 'Tiempo',
        type: 'string',
        filter: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  public Alarm: Alarmas[];

  constructor(
    public accessChecker: NbAccessChecker,
    private toastrService: NbToastrService,
    public apiGetComp: ApiGetService,
    private api: HttpService,
    private http: HttpClient,
  ) {
    
    this.alive;
    this.accessChecker.isGranted('edit', 'ordertable')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      if(res){ 
        this.select = false;
        this.mostrar = false;
      }else {
        this.select=true;
        this.mostrar=true;
      }
    });
  }

  ngOnInit(): void {
    this.Chargealarms();
    this.ChargeHistoryData();
    this.pageSettings = { pageSize: 10 };
    this.filterOptions = {
      type: 'Menu',
   };
  }

  // onedit($event: any) {
  //     this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Alarms/postalarm?IdAlarm' + $event.data.id).subscribe((res: any) => {
  //       //REPORTOCUPATION=res;
  //       console.log("alarmId", res);
  //       // this.Alarm = res;
  //       // this.source.load(res);
  //     });
    
  // }

  onDeleteConfirm(event): void {
   
    this.accessChecker.isGranted('edit', 'ordertable')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          var respons = 
            {
            IdAlarm: event.data.Id
            };
          let alarm = {IdAlarm: event.data.Id};
      this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmId', respons)
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        //  console.log("alarmId", res);
         if (res) {
          this.toastrService.success('', '¡Alarma solucionada!'); 
          this.source.refresh();
        } else {
          this.toastrService.danger('', 'Algo salio mal.');
        }
      });
      event.confirm.resolve();
          this.select = false;
          this.mostrar = false;
        }else {
          this.select=true;
          this.mostrar=true;
        }
      });
    //  console.log("Evento: ", event);
      
    
  }

  reconocer() {
    this.source.refresh();
       this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmAll', "")
       .pipe(takeWhile(() => this.alive))
       .subscribe((res: any) => {
          if (res) {
           this.toastrService.success('', '¡Alarmas solucionadas!');
           this.source.refresh();
           this.Chargealarms();
           this.select=true;
         } else {
           this.toastrService.danger('', 'Algo salio mal.');
         }
         this.source.refresh();
       });
       
  }

  Chargealarms() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      this.Alarm = res;
      this.source.load(res);
      this.source.refresh();
    });
    const contador = interval(6000)
    contador.subscribe((n) => {
      this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.Alarm = res;
        this.source.load(res);
        this.source.refresh();
      });
    });

  }

  ChargeHistoryData() {
    this.http.get(this.api.apiUrlNode1 + '/historyalarm')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      // console.log('HistoryAlarmData: ', res);
      this.historyAlarmData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/historyalarm')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.historyAlarmData = res;
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  

}

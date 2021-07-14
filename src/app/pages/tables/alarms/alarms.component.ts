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
import { GridComponent, PageSettingsModel, FilterSettingsModel, CommandClickEventArgs, EditService, CommandColumnService, CommandModel } from '@syncfusion/ej2-angular-grids';
import { UserStore } from '../../../@core/stores/user.store';

interface Alarmas {
  Id: number;
  Message: string;
  Level: string;
  Exception: string;
  UserId: string;
  TimeStamp: string;
  ETD: string;
  UserIdAcknow: string;
  IdDevice: string;
}

let ALARMAS: Alarmas[] = [


];

@Component({
  selector: 'ngx-alarms',
  templateUrl: './alarms.component.html',
  providers: [ EditService, CommandColumnService],
  styleUrls: ['./alarms.component.scss',]
})
export class AlarmsComponent implements OnDestroy {

  public select = false;
  private alive = true;
  mostrar: Boolean;
  public pageSettings: PageSettingsModel;
  public editSettings: Object;
  public historyAlarmData: Alarmas[];
  public editparams: Object;
  public commands: CommandModel[];
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
        title: 'Fecha',
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
    private userStore: UserStore,
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
   this.editSettings = { allowEditing: false, allowDeleting: true };
   this.commands = [
  //  { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
   { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
  //  { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
  //  { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
];
  }

  // onedit($event: any) {
  //     this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Alarms/postalarm?IdAlarm' + $event.data.id).subscribe((res: any) => {
  //       //REPORTOCUPATION=res;
  //       console.log("alarmId", res);
  //       // this.Alarm = res;
  //       // this.source.load(res);
  //     });
    
  // }

  commandClick(args: CommandClickEventArgs): void {
    debugger
    alert(JSON.stringify(args.rowData));
    
}

Delete(event): void {
    debugger
    this.accessChecker.isGranted('edit', 'ordertable')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
            IdAlarm: event.data.Id,
            UserIdAcknow: currentUserId
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
    
      const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
              UserIdAcknow: currentUserId
            };
            
       this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmAll', respons)
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
      console.log('test alarm: ', this.Alarm)
      // this.source.load(res);
      // this.source.refresh();
    });
    const contador = interval(6000)
    contador.subscribe((n) => {
      this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.Alarm = res;
        // this.source.load(res);
        // this.source.refresh();
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

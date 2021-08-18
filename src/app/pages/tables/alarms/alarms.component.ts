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
import { GridComponent, PageSettingsModel, FilterSettingsModel, CommandClickEventArgs, EditService, CommandColumnService, CommandModel, ToolbarService, PageService, QueryCellInfoEventArgs, DialogEditEventArgs, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { UserStore } from '../../../@core/stores/user.store';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';
import { Browser } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import Swal from 'sweetalert2';

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
  providers: [ToolbarService, EditService, PageService],
  styleUrls: ['./alarms.component.scss',]
})
export class AlarmsComponent implements OnDestroy {

  public select = false;
  private alive = true;
  mostrar: Boolean;
  public pageSettings: PageSettingsModel;
  

  public editSettings: Object;
    // public toolbar: string[];
    public toolbar: ToolbarItems[] | object;

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
   this.editSettings = { allowEditing: true, allowAdding: false, allowDeleting: true , newRowPosition: 'Top' };
   this.toolbar = [{text: 'Delete', prefixIcon: 'fas fa-check'},
   { text: 'Reconocer alarmas', tooltipText: 'Click', prefixIcon: 'fas fa-check-double', id: 'Click' }];
//    this.editSettings = { allowEditing: false, allowDeleting: true };
//    this.commands = [
//   //  { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
//    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
//   //  { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
//   //  { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
// ];
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

clickHandler(args: ClickEventArgs): void {
  if (args.item.id === 'Click') {
    console.log('click: ', args);
    debugger
    this.reconocer();
    console.log('Se reconocieron todas las alarmas');
    
      // alert('Custom Toolbar Click...');
  }
}

tooltip(args: QueryCellInfoEventArgs) {
  const tooltip: Tooltip = new Tooltip({
      content: args.data[args.column.field].toString()
      
  }, args.cell as HTMLTableCellElement);
  // console.log('tool:', tooltip);
}

// actionComplete(args: DialogEditEventArgs): void {
//   if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
//       if (Browser.isDevice) {
//           args.dialog.height = window.innerHeight - 90 + 'px';
//           (<Dialog>args.dialog).dataBind();
//       }
//       // Set initail Focus
//       if (args.requestType === 'beginEdit') {
//           (args.form.elements.namedItem('CustomerName') as HTMLInputElement).focus();
//       } else if (args.requestType === 'add') {
//           (args.form.elements.namedItem('OrderID') as HTMLInputElement).focus();
//       }
//   }
// }

actionComplete(args) {
  if (( args.requestType === 'delete')) {
      // const dialog = args.dialog;
      debugger
      const Id = 'Id';
      // change the header of the dialog
      console.log('Type: ', args.data[0].Id);
      // console.log('id: ', args.rowData.Id);
      // debugger
    
    this.accessChecker.isGranted('edit', 'ordertable')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        if(res){ 
          const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
            IdAlarm: args.data[0].Id,
            UserIdAcknow: currentUserId
            };
          // let alarm = {IdAlarm: event.data.Id};
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
      // args.rowData.Id.resolve();
      //     this.select = false;
      //     this.mostrar = false;
        }else {
          this.select=true;
          this.mostrar=true;
        }
      });
      // dialog.header = args.requestType === 'beginEdit' ? 'Record of ' + args.rowData[CustomerID] : 'New Customer';
  }
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
    this.accessChecker.isGranted('edit', 'ordertable')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      if(res){ 
      Swal.fire({
      title: 'Desea reconocer alarmas?',
      text: `¡Reconocerá todas las alarmas!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, Reconocer!'
    }).then(result => {
      debugger
      if (result.value) {
      const currentUserId = this.userStore.getUser().id;
          var respons = 
            {
              UserIdAcknow: currentUserId
            };
            
       this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmAll', respons)
       .pipe(takeWhile(() => this.alive))
       .subscribe((res: any) => {
        this.source.refresh();
        this.Chargealarms();
       });
    
          Swal.fire('¡Se Eliminó Exitosamente', 'success');
          this.source.refresh();
      }
    });
          this.source.refresh();   
          this.select = false;
          this.mostrar = false;
        }else {
          this.select=true;
          this.mostrar=true;
        }
      });
  }

  // reconocer() {
  //   debugger
  //   this.accessChecker.isGranted('edit', 'ordertable')
  //     .pipe(takeWhile(() => this.alive))
  //     .subscribe((res: any) => {
  //       if(res){ 
  //     const currentUserId = this.userStore.getUser().id;
  //         var respons = 
  //           {
  //             UserIdAcknow: currentUserId
  //           };
            
  //      this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmAll', respons)
  //      .pipe(takeWhile(() => this.alive))
  //      .subscribe((res: any) => {
  //         if (res) {
  //          this.toastrService.success('', '¡Alarmas solucionadas!');
  //          this.source.refresh();
  //          this.Chargealarms();
  //          this.select=true;
  //        } else {
  //          this.toastrService.danger('', 'Algo salio mal.');
  //        }
  //        this.source.refresh();
  //      });
  //     }else {
  //       this.select=true;
  //       this.mostrar=true;
  //     }
  //   });
       
  // }

  Chargealarms() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      this.Alarm = res;
      // console.log('test alarm: ', this.Alarm)
      // this.source.load(res);
      // this.source.refresh();
    });
    const contador = interval(30000)
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

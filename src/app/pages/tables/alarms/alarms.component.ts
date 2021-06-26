import { Component, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/interfaces/common/smart-table';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { NbToastrService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';

interface Alarmas {
  Id: number;
  Message: string;
  Level: string;
  Exception: string;
  UserId: number;
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
        title: 'usuario',
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
  ) {
    this.Chargealarms();
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
       this.apiGetComp.PostJson(this.api.apiUrlNode1 + '/ResetAlarmAll', "")
       .pipe(takeWhile(() => this.alive))
       .subscribe((res: any) => {
          if (res) {
           this.toastrService.success('', '¡Alarmas solucionadas!');
           this.select=true;
           this.source.refresh();
         } else {
           this.toastrService.danger('', 'Algo salio mal.');
         }
       });
     
  }

  Chargealarms() {
    this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      //REPORTOCUPATION=res;
      // console.log("Report Total Ordenes:", res);
      this.Alarm = res;
      this.source.load(res);
      // console.log("Alarm", res, "Al", this.Alarm);
      
    });
    const contador = interval(4000)
    contador.subscribe((n) => {
      this.apiGetComp.GetJson(this.api.apiUrlNode1 + '/GetAlarms')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        //REPORTOCUPATION=res;
        this.Alarm = res;
        this.source.load(res);
      });
    });

  }

  ngOnDestroy() {
    this.alive = false;
  }

  

}

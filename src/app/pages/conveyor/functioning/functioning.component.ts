import { Component, OnInit } from '@angular/core';
// import { Dashboardv2Data } from '../../../@core/interfaces/iot/dashboardv2';
import {
  NgxFilterByNumberComponent,
} from '../../../@components/custom-smart-table-components/filter-by-number/filter-by-number.component';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiGetService } from '../../../@core/backend/common/api/apiGet.services';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { takeWhile } from 'rxjs/operators';
import { NbAccessChecker } from '@nebular/security';
import { interval } from 'rxjs';

export interface Fun {
  conveyor: string;
  fecha_Hora_Activ: string;
  tiempoEncendido: number;
  tiempo_Paro: number;
}

@Component({
  selector: 'ngx-functioning',
  templateUrl: './functioning.component.html',
  styleUrls: ['./functioning.component.scss']
})
export class FunctioningComponent implements OnInit {

  Fun = [];

  settings = {
    mode: 'external',
    actions: {
      add: false,
      edit: false,
      delete: false,
    },

    columns: {
      
      conveyor: {
        title: 'Conveyors',
        type: 'string',
      },
      fecha_Hora_Activ: {
        title: 'Hora Activación',
        type: 'string',
      },
      tiempoEncendido: {
        title: 'Tiempo Encendido',
        filter: {
          type: 'custom',
          component: NgxFilterByNumberComponent,
        },
      },
      tiempo_Paro: {
        title: 'Duración ultimo paro',
        filter: {
          type: 'custom',
          component: NgxFilterByNumberComponent,
        },
      },
    },
  };

  source1: LocalDataSource = new LocalDataSource();
  public funData: Fun[];

  constructor(public apiGetComp: ApiGetService,
    private api: HttpService) {
      this.ChargeFunData();
    }

    ChargeFunData() {
      this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetTimeEffic').subscribe((res: any) => {
        //REPORTOCUPATION=res;
        console.log("TeamData:", res);
        this.funData = res;
        this.source1.load(res);
      });
      const contador = interval(60000)
      contador.subscribe((n) => {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetTimeEffic').subscribe((res: any) => {
          //REPORTOCUPATION=res;
          this.funData = res;
          this.source1.load(res);
        });
      });
  
    }

  ngOnInit() {
  //  this.Dashboardv2Service.getFunData().subscribe((data: any[]) => {
  //   this.Fun = data;
  //  });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

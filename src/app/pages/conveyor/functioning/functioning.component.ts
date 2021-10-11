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
import { HttpClient } from '@angular/common/http';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

export interface Fun {
  Conveyor: string;
  Fecha_Hora_Activ: string;
  TiempoEncendido: string;
  tiempo_Paro: string;
}
 
@Component({
  selector: 'ngx-functioning',
  templateUrl: './functioning.component.html',
  styleUrls: ['./functioning.component.scss']
})
export class FunctioningComponent implements OnInit {

  Fun = [];

  public funData: Fun[] = [];

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  private alive = true;

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
  

  constructor(public apiGetComp: ApiGetService,
    private http: HttpClient,
    private api: HttpService) {
      
    }

    ngOnInit() {
      // this.ChargeFunData();
      this.chargeData();
      this.pageSettings = { pageSize: 10 };
      this.filterOptions = {
      type: 'Menu',
   }
      }

      chargeData() {
        this.http.get(this.api.apiUrlNode1 + '/api/getoperation')
        .pipe(takeWhile(() => this.alive))
        .subscribe((res: any) => {
          // tslint:disable-next-line: no-console
          console.log('funData: ', res);
          this.funData = res;
        });
        const contador = interval(40000)
        contador.subscribe((n) => {
          this.http.get(this.api.apiUrlNode1 + '/api/getoperation')
          .pipe(takeWhile(() => this.alive))
          .subscribe((res: any) => {
            this.funData = res;
          });
        });
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

    ngOnDestroy() {
      this.alive = false;
    }

}

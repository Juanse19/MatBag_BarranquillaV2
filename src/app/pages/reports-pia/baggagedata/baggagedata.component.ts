import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {
  NgxFilterByNumberComponent,
} from '../../../@components/custom-smart-table-components/filter-by-number/filter-by-number.component';

import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GridComponent, PageSettingsModel, FilterService, FilterType, SortService  } from '@syncfusion/ej2-angular-grids';


export interface baggage {
  BagTag: string;
  FechaBma: string;
  BhsId: number;
  TipoEquipaje: number;
  FechaEds: string;
  estado1: string;
  estado2: string;
}

@Component({
  selector: 'ngx-baggagedata',
  templateUrl: './baggagedata.component.html',
  styleUrls: ['./baggagedata.component.scss'],
  providers: [FilterService, SortService]
})
export class BaggagedataComponent implements OnInit {

  public baggageData: baggage[];

  private alive = true;

  public pageSettings: PageSettingsModel;
  
  

  // settings = {
  //   mode: 'external',
  //   actions: {
  //     add: false,
  //     edit: false,
  //     delete: false,
  //   },
    
  //   columns: {

  //     BagTag: {
  //       title: 'BagTag',
  //       type: 'string',
  //     },
  //     FechaBma: {
  //       title: 'Fecha atr',
  //       type: 'string',
  //       filter: {
  //         type: 'custom',
  //         component: NgxFilterByNumberComponent,
  //       },
  //     },
  //     BhsId: {
  //       title: 'Bhs-Id',
  //       type: 'string',
  //     },
  //     TipoEquipaje: {
  //       title: 'Tipo Equipaje',
  //       type: 'string',
  //     },
  //     FechaEds: {
  //       title: 'Fecha desviado',
  //       filter: {
  //         type: 'custom',
  //         component: NgxFilterByNumberComponent,
  //       },
  //     },
  //     estado1: {
  //       title: 'Estado inspección 1',
  //       filter: {
  //         type: 'custom',
  //         component: NgxFilterByNumberComponent,
  //       },
  //     },
  //     estado2: {
  //       title: 'Estado inspección 2',
  //       filter: {
  //         type: 'custom',
  //         component: NgxFilterByNumberComponent,
  //       },
  //     },
  //   },
  // };

  source: LocalDataSource = new LocalDataSource();
  

  constructor(
    private http: HttpClient,
    private api: HttpService) {
      
    }

     
  ngOnInit(): void { 
    this.ChargeData();
    this.pageSettings = { pageSize: 5 };
  } 

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/eq')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      console.log("TeamData:", res);
      this.baggageData = res;
      this.source.load(res);
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/eq')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.baggageData = res;
        this.source.load(res);
      });
    });
  }

}

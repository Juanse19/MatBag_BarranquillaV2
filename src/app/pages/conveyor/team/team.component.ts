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

export interface Team {
  desc: string;
  State: string;
  power: number;
  current: number;
  failure: string;
}


export interface teams {
  Conveyors: string;
  Estado: string;
  Energia: string;
  Corriente: string;
  Mensaje: string;
}
 
@Component({
  selector: 'ngx-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  Team = [];

  public teamsData: Team[] = [];

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

      desc: {
        title: 'Conveyors',
        type: 'string',
      },
      State: {
        title: 'Estado',
        type: 'string',
      },
      power: {
        title: 'Energia',
        filter: {
          type: 'custom',
          component: NgxFilterByNumberComponent,
        },
      },
      current: {
        title: 'Corriente',
        filter: {
          type: 'custom',
          component: NgxFilterByNumberComponent,
        },
      },
      failure: {
        title: 'Mensaje',
        type: 'string',
      },
    },
  };

  source1: LocalDataSource = new LocalDataSource();
  // public teamData: Team[];

  constructor(public apiGetComp: ApiGetService,
    private http: HttpClient,
    private api: HttpService) {
      
    }

    ngOnInit() {
      // this.ChargeTeamData();
      this.chargeData();
      this.pageSettings = { pageSizes: true, pageSize: 10 };
      this.filterOptions = {
      type: 'Menu',
   }
      }

    chargeData() {
      this.http.get(this.api.apiUrlNode1 + '/api/team')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        // tslint:disable-next-line: no-console
        // console.log('teamsData: ', res);
        this.teamsData = res;
      });
      const contador = interval(40000)
      contador.subscribe((n) => {
        this.http.get(this.api.apiUrlNode1 + '/api/team')
        .pipe(takeWhile(() => this.alive))
        .subscribe((res: any) => {
          this.teamsData = res;
        });
      });
    }

    // ChargeTeamData() {
    //   this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetEfficiency').subscribe((res: any) => {
    //     //REPORTOCUPATION=res;
    //     console.log("TeamData:", res);
    //     this.teamData = res;
    //     this.source1.load(res);
    //   });
    //   const contador = interval(60000)
    //   contador.subscribe((n) => {
    //     this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetEfficiency').subscribe((res: any) => {
    //       //REPORTOCUPATION=res;
    //       this.teamData = res;
    //       this.source1.load(res);
    //     });
    //   });
  
    // }


  ngOnDestroy() {
    this.alive = false;
  }

}

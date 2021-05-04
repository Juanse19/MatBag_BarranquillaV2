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

export interface Team {
  desc: string;
  State: string;
  power: number;
  current: number;
  failure: string;
}

@Component({
  selector: 'ngx-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  Team = [];

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
  public teamData: Team[];

  constructor(public apiGetComp: ApiGetService,
    private api: HttpService) {
      this.ChargeTeamData();
    }

    ChargeTeamData() {
      this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetEfficiency').subscribe((res: any) => {
        //REPORTOCUPATION=res;
        console.log("TeamData:", res);
        this.teamData = res;
        this.source1.load(res);
      });
      const contador = interval(60000)
      contador.subscribe((n) => {
        this.apiGetComp.GetJson(this.api.apiUrlMatbox + '/Dashboardv1/GetEfficiency').subscribe((res: any) => {
          //REPORTOCUPATION=res;
          this.teamData = res;
          this.source1.load(res);
        });
      });
  
    }

  ngOnInit() {
  //  this.Dashboardv2Service.getTeamData().subscribe((data: any[]) => {
  //   this.Team = data;
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

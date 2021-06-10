import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';

export interface edsStatistics {
  bagsalarmed: string;
  bagscleared: string;
  Edsfaults: string;
  Failurestartdate: string;
  Failureenddate: string;
}

@Component({
  selector: 'ngx-edsstatistics',
  templateUrl: './edsstatistics.component.html',
  styleUrls: ['./edsstatistics.component.scss']
})
export class EdsstatisticsComponent implements OnInit {

  public edsStatisticsData: edsStatistics[];

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  constructor(private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.ChargeData();
    this.pageSettings = { pageSize: 5 };
    this.filterOptions = {
      type: 'Menu',
   };
  }

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/eds')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      console.log('edsStatisticsData: ', res);
      this.edsStatisticsData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/eds')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.edsStatisticsData = res;
      });
    });
  }

}

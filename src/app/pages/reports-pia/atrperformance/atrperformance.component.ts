import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';

export interface atrperformance {
  Name: string;
Description: string;
Totalbaggageviewed: string;
Totalbarcodesread: string;
Totalbarcodesproblems: string;
bagtagsassociatedtracking: string;
TotalbagtagsreadAtrEds: string;
TotalIATAtassentbackEds: string;
}

@Component({
  selector: 'ngx-atrperformance',
  templateUrl: './atrperformance.component.html',
  styleUrls: ['./atrperformance.component.scss']
})
export class AtrperformanceComponent implements OnInit {

  public atrperformanceData: atrperformance[];

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
    this.http.get(this.api.apiUrlNode1 + '/at')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      console.log('edsStatisticsData: ', res);
      this.atrperformanceData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/at')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.atrperformanceData = res;
      });
    });
  }

}

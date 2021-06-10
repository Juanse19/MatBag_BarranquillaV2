import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';

export interface bhsfault {
  Faulttype: string;
  Faultlocation: string;
  Faulttime: string;
  Faulttimecleared: string;
  Totalfaulttime: string;
}

@Component({
  selector: 'ngx-bhs-faults',
  templateUrl: './bhs-faults.component.html',
  styleUrls: ['./bhs-faults.component.scss']
})
export class BhsFaultsComponent implements OnInit {

  public bhsfaultData: bhsfault[];

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
    this.http.get(this.api.apiUrlNode1 + '/bhs')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      console.log('bagData: ', res);
      this.bhsfaultData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/bhs')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.bhsfaultData = res;
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Dialog, Tooltip } from '@syncfusion/ej2-popups';

export interface bhsevent {
  Eventtype: string;
  Eventtime: string;
  Totaleventtime: string;
}

@Component({
  selector: 'ngx-bhs-events',
  templateUrl: './bhs-events.component.html',
  styleUrls: ['./bhs-events.component.scss'],
})
export class BhsEventsComponent implements OnInit {

  public bhseventData: bhsevent[];

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

  tooltip(args: QueryCellInfoEventArgs) {
    const tooltip: Tooltip = new Tooltip({
        content: args.data[args.column.field].toString()
        
    }, args.cell as HTMLTableCellElement);
    // console.log('tool:', tooltip);
  }

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/ev')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      console.log('bhseventData: ', res);
      this.bhseventData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/ev')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.bhseventData = res;
      });
    });
  }

}

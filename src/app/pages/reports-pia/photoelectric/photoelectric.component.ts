import { Component, OnInit } from '@angular/core';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';

export interface bag {
  BagID: string;
  estado: string;
}

@Component({
  selector: 'ngx-photoelectric',
  templateUrl: './photoelectric.component.html',
  styleUrls: ['./photoelectric.component.scss']
})
export class PhotoelectricComponent implements OnInit {

  public bagData: bag[];

  private alive = true;

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  constructor(private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.ChargeData();
    this.pageSettings = { pageSize: 5 };
    this.filterOptions = {
      type: 'Menu'
   };
  }

  ChargeData() {
    this.http.get(this.api.apiUrlNode1 + '/fc')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      console.log("bagData:", res);
      this.bagData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/fc')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.bagData = res;
      });
    });
  }

}

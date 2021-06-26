import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda7, states, teams, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { GridComponent, PageSettingsModel, FilterSettingsModel } from '@syncfusion/ej2-angular-grids';

export interface bhsosr {
  Bagtag: string;
  BagId: string;
  Device: string;
  Log: string;
}

@Component({
  selector: 'ngx-bhs7',
  templateUrl: './bhs7.component.html',
  styleUrls: ['./bhs7.component.scss']
})
export class Bhs7Component implements OnInit {

  public zone: zons[] = [];

  public zons: zons[] = [];

  public divice: teams[] = [];

  public states: states [] = [];

  public osrData: bhsosr[] = [];

  public pageSettings: PageSettingsModel;

  public filterOptions: FilterSettingsModel;

  private alive = true;

  intervalSubscriptionStatusAlarm: Subscription;

  // public dataBanda7: Banda7 = {
  //   b1: "",
  //   b2: "",
  //   b3: "",
  //   b4: "",
  //   b5: "",
  //   b6: "",
  //   b7: "",
  //   b8: "",
  //   b9: "",
  //   b10: "",
  //   b11: "",
  //   b12: "",
  //   b13: "",
  //   b14: "",
  //   b15: "",
  //   b16: "",
  //   b17: "",
  //   b18: "",
  //   b19: "",
  //   b20: "",
  //   b21: "",
  //   b22: "",
  //   b23: "",
  //   b24: "",
  //   b25: "",
  //   b26: "",
  //   }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    // this.banda7NameCharge();
    this.bandaNameCharge();
    this.bandaNameOsrCharge();
    this.chargeData();
    this.pageSettings = { pageSize: 5 };
    this.filterOptions = {
      type: 'Menu',
   };
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  // public banda7NameCharge(){

  //   this.http.get(this.api.apiUrlNode1 + '/ssosr')
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     this.dataBanda7=res[0];
  //     console.log('data-banda7:', res);
      
  //   });

  // }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona2')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('ss:', res , 'band with zones', this.zone[1].Name);
      
    });

  }

  public bandaNameOsrCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona3')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zons=res;
      console.log('Osr:', res , 'band with zones', this.zons[1].Name);
      
    });

  }

  public changeId(tea: any){
 
    this.http.get(this.api.apiUrlNode1 + '/apideviceconsume?DeviceId='+ tea)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.divice=res;
      console.log('Zons:', res , 'states');
      
    });
  }

  public bandaStateCharge(){

    if (this.intervalSubscriptionStatusAlarm) {
      this.intervalSubscriptionStatusAlarm.unsubscribe();
    }
    
    this.intervalSubscriptionStatusAlarm = interval(1000)
    .pipe(
      takeWhile(() => this.alive),
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona3')),
    )
    .subscribe((res: any) => {
        this.states  = res;
        console.log('status:', res);
    });
  }

  chargeData() {
    this.http.get(this.api.apiUrlNode1 + '/oss')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any) => {
      // tslint:disable-next-line: no-console
      console.log('bhsOsrData: ', res);
      this.osrData = res;
    });
    const contador = interval(40000)
    contador.subscribe((n) => {
      this.http.get(this.api.apiUrlNode1 + '/oss')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.osrData = res;
      });
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda2, states, teams, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
 @Component({
  selector: 'ngx-bhs2',
  templateUrl: './bhs2.component.html',
  styleUrls: ['./bhs2.component.scss']
})
export class Bhs2Component implements OnInit {

  public zone: zons[] = [];

  public zons: zons[] = [];

  public divice: teams[] = [];

  public states: states [] = [];

  private alive=true;

  intervalSubscriptionStatusAlarm:Subscription;

  // public dataBanda2: Banda2 = {
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
  //   b27: "",
  //   b28: "",
  //   b29: "",
  //   b30: "",
  //   b31: "",
  //   b32: "",
  //   b33: "",
  //   b34: ""
  //   }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    // this.banda2NameCharge();
    this.bandaNameCharge();
    this.bandaNameXOCharge();
    this.bandaStateCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  // public banda2NameCharge(){

  //   this.http.get(this.api.apiUrlNode1 + '/sf')
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     this.dataBanda2=res[0];
  //     console.log('data-banda2:', res);
      
  //   });

  // }

  public bandaNameCharge(){
    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona1')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('Zons2:', res , 'band with zones', this.zone[1].Name);
      
    });
  }

  public bandaNameXOCharge(){
    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona10')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zons=res;
      console.log('Zons10:', res , 'band with zones', this.zone[1].Name);
      
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
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona1')),
    )
    .subscribe((res: any) => {
        this.states  = res;
        console.log('status:', res);
    });
  }

  ngOnDestroy() {
    this.changeId(this.alive = false);
    this.alive = false;
  }

}

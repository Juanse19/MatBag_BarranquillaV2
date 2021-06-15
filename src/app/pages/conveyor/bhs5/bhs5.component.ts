import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda5, zons, states, teams } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-bhs5',
  templateUrl: './bhs5.component.html',
  styleUrls: ['./bhs5.component.scss']
})
export class Bhs5Component implements OnInit {

  public zone: zons[] = [];

  public divice: teams[] = [];

  public states: states [] = [];

  private alive = true;

  intervalSubscriptionStatusAlarm: Subscription;
 
  // public dataBanda5: Banda5 = {
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
  //   }

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    // this.banda5NameCharge();
    this.bandaNameCharge();
    this.bandaStateCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  }

  // public banda5NameCharge(){

  //   this.http.get(this.api.apiUrlNode1 + '/sfi')
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res: any)=>{
  //     this.dataBanda5=res[0];
  //     // console.log('data-banda5:', res);
  //     console.log("FCS", this.dataBanda5.b1);
      
  //   });

  // }

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona12')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      // console.log('Zons3:', res , 'band with zones', this.zone[1].Name);
      
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
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona12')),
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

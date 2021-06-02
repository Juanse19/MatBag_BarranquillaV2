import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, takeUntil, takeWhile, timeout,switchMap } from 'rxjs/operators';
import { Observable, Subject, of, BehaviorSubject, interval,Subscription } from 'rxjs';
import { Zones, syste, teams } from '../../../conveyor/_interfaces/MatBag.model';
import { HttpService } from '../../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-system-operation',
  templateUrl: './system-operation.component.html',
  styleUrls: ['./system-operation.component.scss']
})
export class SystemOperationComponent implements OnInit {

  public zone: Zones[] = [];

  public zo: Zones[] = [];

  public syst: syste[] = [];

  private alive=true;

  team: teams[] = [];

  intervalSubscriptionStatusAlarm:Subscription;

  constructor(
    private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.GetSystem();
    // this.GetOrderProcess();
    // this.changeId();
    // this.StatusAlarmCharge()
  }

  private GetSystem(){    
    this.http.get(this.api.apiUrlNode1 + '/apifront')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:Zones[])=>{
      this.zone=res;
      // console.log("zon", this.zone);
      // console.log("Res ", res);
      
    });
  }

  // private GetOrderProcess(){    
  //   this.http.get(this.api.apiUrlNode1 + '/zo')
  //   .pipe(takeWhile(() => this.alive))
  //   .subscribe((res:Zones[])=>{
  //     this.zo=res;
  //     console.log("zys", this.zo);
  //     console.log("Res ", res);
      
  //   });
  // }

  // public changeId(){

  //   if (this.intervalSubscriptionStatusAlarm) {
  //     this.intervalSubscriptionStatusAlarm.unsubscribe();
  //   }
    
       
  //   this.intervalSubscriptionStatusAlarm = interval(1000)
  //   .pipe(
  //     takeWhile(() => this.alive),
  //     switchMap(() => this.http.get(this.api.apiTeam + '/usuarios')),
  //   )
  //   .subscribe((res: any) => {
  //       this.team  = res;
  //       console.log('captura Id:', res);
  //   });

  //   // this.apiGetComp.GetJson(this.api.apiUrlNode + '/es')
  //   //   .pipe(takeWhile(() =>this.flagMoverCarro))
  //   // .subscribe((res: any) => {
  //   //   this.showdataAlarms  = res[0];
  //   //   });

  // }

  // public StatusAlarmCharge(){

  //   if (this.intervalSubscriptionStatusAlarm) {
  //     this.intervalSubscriptionStatusAlarm.unsubscribe();
  //   }
    
       
  //   this.intervalSubscriptionStatusAlarm = interval(1000)
  //   .pipe(
  //     takeWhile(() => this.alive),
  //     switchMap(() => this.http.get(this.api.apiUrlNode1 + '/es')),
  //   )
  //   .subscribe((res: any) => {
  //       this.syst  = res[0];
  //       console.log("estadisticas ", this.syst)
        
  //   });
  // }

  bhs1() {
    this.router.navigate(['/pages/conveyor/bhs1']);
   }

   bhs2() {
    this.router.navigate(['/pages/conveyor/bhs2']);
   }

   bhs3() {
    this.router.navigate(['/pages/conveyor/bhs3']);
   }

   bhs4() {
    this.router.navigate(['/pages/conveyor/bhs4']);
   }

   bhs5() {
    this.router.navigate(['/pages/conveyor/bhs5']);
   }

   bhs6() {
    this.router.navigate(['/pages/conveyor/bhs6']);
   }

   bhs7() {
    this.router.navigate(['/pages/conveyor/bhs7']);
   }

   bhs8() {
    this.router.navigate(['/pages/conveyor/bhs8']);
   }

}

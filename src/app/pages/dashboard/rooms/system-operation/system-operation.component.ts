import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, takeUntil, takeWhile, timeout,switchMap } from 'rxjs/operators';
import { Observable, Subject, of, BehaviorSubject, interval,Subscription } from 'rxjs';
import { Zones, syste, teams, Consumezone, departures } from '../../../conveyor/_interfaces/MatBag.model';
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

  public consumezoneData: Consumezone[] = [];


  public deparData: departures[] = [];

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

  public changeId(tea: any){
    this.http.get(this.api.apiUrlNode1 + '/apiZoneFrontConsume?zone='+ tea)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.consumezoneData=res;
      // console.log('Zons:', res , 'states');
    });
  }

  public changeIdMakeUp(mak: any){
 
    this.http.get(this.api.apiUrlNode1 + '/api/departuresInfo?Id='+ mak)
    .pipe(takeWhile(() => this.alive))
    .subscribe((res: any)=>{
      this.deparData=res;
      // console.log('MakeUps:', res , 'states');
      
    });
  }


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

   bhs9() {
    this.router.navigate(['/pages/conveyor/bhs9']);
   }

   bhs10() {
    this.router.navigate(['/pages/conveyor/bhs10']);
   }

   ngOnDestroy() {
    this.alive = false;
  }

}

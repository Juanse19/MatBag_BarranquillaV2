import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { zons, teams, states } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { switchMap, takeWhile } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-ib3',
  templateUrl: './ib3.component.html',
  styleUrls: ['./ib3.component.scss']
})
export class Ib3Component implements OnInit {

  private alive=true;

  public divice: teams[] = [];

  public zone: zons[] = [];

  public states: states [] = [];

  intervalSubscriptionStatusAlarm: Subscription;

  constructor(private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.bandaNameCharge();
    this.bandaStateCharge();
  }

  back() {
    this.router.navigate(['/pages/conveyor/info']);
    return false;
  }

  public bandaNameCharge(){
    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona9')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('bandaIB1:', res , 'band with zones', this.zone[1].idEquipo);
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
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona9')),
    )
    .subscribe((res: any) => {
        this.states  = res;
        console.log('status:', res);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

}

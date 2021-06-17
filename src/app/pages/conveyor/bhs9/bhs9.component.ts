import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, takeWhile } from 'rxjs/operators';
import { Banda7, states, teams, zons } from '../_interfaces/MatBag.model';
import { HttpService } from '../../../@core/backend/common/api/http.service';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'ngx-bhs9',
  templateUrl: './bhs9.component.html',
  styleUrls: ['./bhs9.component.scss']
})
export class Bhs9Component implements OnInit {

  public zone: zons[] = [];

  public divice: teams[] = [];

  public states: states [] = [];

  private alive = true;

  intervalSubscriptionStatusAlarm: Subscription;

  constructor(private router: Router,
    private http: HttpClient,
    private api: HttpService) { }

  ngOnInit(): void {
    this.bandaNameCharge();
  }

  back() {
    this.router.navigate(['/pages/iot-dashboard']);
    return false;
  } 

  public bandaNameCharge(){

    this.http.get(this.api.apiUrlNode1 + '/apizonename?zone=zona2')
    .pipe(takeWhile(() => this.alive))
    .subscribe((res:zons[]=[])=>{
      this.zone=res;
      console.log('ss:', res , 'band with zones', this.zone[1].Name);
      
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
      switchMap(() => this.http.get(this.api.apiUrlNode1 + '/apizonestate?zone=zona2')),
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
